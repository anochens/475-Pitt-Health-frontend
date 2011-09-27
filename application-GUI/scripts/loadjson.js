function loadfile(successFunction, primarykey, filename){
	window.jsondata=[]; //creates a global array to store JSON elements
	data = [];
	$.ajax({
	  url: filename,
	  async: false,
	  dataType: 'json',
	  success: function(d) { data = d; }
	});

	for(var i=0;i<data.length;i++){
		window.jsondata[data[i].pk]=data[i]; 
	}
	return successFunction(primarykey);
}

function getEntryFromFile(primarykey, filename) {
	if(typeof filename === 'undefined') {
		filename = 'data.json';

	}
	if(typeof window.jsondata === "undefined"){
		return loadfile(getEntry, primarykey, filename);
	}
	return getEntry(primarykey);
}

function getEntry(primarykey){
	var entry = null; //the element from the JSON file
	if(primarykey in window.jsondata){
		entry = window.jsondata[primarykey];
	}
	if(!entry) {
		throw "Can't find an entry with primary key "+primarykey;
		return;
	}

	if(entry.type=="ENDPAGE"){
		//do some bookmark stuff?
	}

	return window.jsondata[primarykey];
}
