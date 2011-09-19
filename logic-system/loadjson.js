function displayHomeInfo(){
	$("#results").empty();
	content = '<p>' + 'Displaying Home information' + '<br/>';
	content += getValues(1);
	content += '</p>';
	$(content).appendTo("#results");
};

function displayInfo(primarykey, action) {
	var url='data/sampledata.json';
	$.getJSON(url, function(data){
		$("#results").empty();
		$.each(data, function(i,dataset){
			datakey = dataset.pk;
			if(datakey == primarykey){
				if(action == "prev"){
					prevprimarykey = dataset.prev
					content = '<p>' + 'Displaying back information' + '<br/>';
					content += getValues(prevprimarykey);
					content += '</p>';
				}
			}
		});
		$(content).appendTo("#results");
	});
};

function getValues(primarykey){
	var url='data/sampledata.json';
	$.getJSON(url, function(data){
		$.each(data, function(i,dataset){
			datakey = dataset.pk;
			if(datakey == primarykey){
				dataitems = 'Title: ' + dataset.title + '<br>';
				dataitems += 'Items: ' + dataset.items;
			}
		});
	});
	return dataitems;
}