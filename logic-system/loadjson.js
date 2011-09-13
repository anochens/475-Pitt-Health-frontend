$(document).ready(function(){
	var url='data/sampledata.json';
	var currentPage =
	$('#home').click(function(){
		$.getJSON(url, function(data){
			$("#results").empty();
			$.each(data, function(i,dataset){
				title = dataset.title
				if(title == "First Page"){
					content = '<p>' + dataset.title + '<br>';
					content += dataset.type + '</p>';
					content += '<hr>'; 
				}
			})
			$(content).appendTo("#results");
		});
	});
	$('#search').click(function(){
		$.getJSON(url, function(data){
			$("#results").empty();
			content = '<p>' + data.color + '<br>';
			content += data.animal + '<br>';
			content += data.url + '</p>';
			content += '<hr>';
			$(content).appendTo("#results");
		});
	});
	$('#back').click(function(){
		$.getJSON(url, function(data){
			$("#results").empty();
			content = '<p>' + data.color + '<br>';
			content += data.url + '</p>';
			content += '<hr>';
			$(content).appendTo("#results");
		});
	});
});
// function loadJSON(fname) 
// {
// 	var xhr=createXHR(); //XHR()
// 	xhr.open("GET", fname,true);
// 	xhr.onreadystatechange=function() 
// 	{
// 		if (xhr.readyState == 4) //don't use magic numbers
// 		{
// 			if (xhr.status != 404) 
// 			{
// 				document.getElementById("zone").innerHTML = "found" + "<br>";
// 				//var data=eval("(" + xhr.responseText + ")"); //look into JSON.parse()
// 				var data=JSON.parse(xhr.responseText);
// 				document.getElementById("zone").innerHTML += "Color: " + data.color + "<br>";
// 				document.getElementById("zone").innerHTML += "&nbsp Animal: " + data.animal + "<br>";
// 				document.getElementById("zone").innerHTML += "&nbsp New URL: " + data.url + "<br>";
// 				var newurl=data.url;
// 				//window.location.href = newurl;
// 			} 
// 			else 
// 			{
// 				document.getElementById("zone").innerHTML = fname + " not found";
// 			}
// 		}
// 	}
// 	xhr.send(null);
// 
// }