function loadfile(success, primarykey, action, filename){
	window.jsondata=[]; //creates a global array to store JSON elements
	data = [];
	$.ajax({
	  url: filename,
	  async: false,
	  dataType: 'json',
	  success: function(d) { data = d; }
	});

	for(var i=0;i<data.length;i++){
		window.jsondata[data[i].pk]=data[i]; //the primarykey will be the index in which the JSON element is st
	}
	return success(primarykey, action);
}

function displayInfo(primarykey, action, filename) {
	if(typeof filename === 'undefined') {
		filename = 'sampledata.json';

	}
	if(typeof window.jsondata === "undefined"){
		return loadfile(doDisplay, primarykey, action, filename);
	}
	return doDisplay(primarykey, action);
}

function doDisplay(primarykey, action){
	var objectofinterest = null; //the element from the JSON file
	if(primarykey in window.jsondata){
		objectofinterest = window.jsondata[primarykey];
	}
	if(objectofinterest==null){
		return null; //if we can't find the corresponding primarykey
	}
	if(action == 'SHOW') {
		return window.jsondata[primarykey];
	}                         
	if(objectofinterest.type=="MENU"){
		elementNum = action.split("ITEM")[1]; //expecting ITEMx, where x = the primary key of the action
		if(objectofinterest.items[elementNum]!=null){
			pk = objectofinterest.items[elementNum];
			return window.jsondata[pk];
		}
		else{
			return null;
		}
	}
	if(objectofinterest.type=="ENDPAGE"){
		//Bookmark (figure out if it already exists in bookmark)
			// add if not in bookmark, remove if already in bookmark
	}
}
