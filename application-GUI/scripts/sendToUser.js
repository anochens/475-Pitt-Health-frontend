function showMailerButton(){
	var data = $("#main-data").html();
	$('#email-button').show();
	$('#email-button').attr("href", "mailto:?subject="+encodeURIComponent(document.title)+"&body=" + encodeURIComponent(data));
}

function showSMSButton(){
	var data = $("#main-data").html();
	var phone = data.match(/[01]?[- .]?\(?[2-9]\d{2}\)?[- .]?\d{3}[- .]?\d{4}/g);
	$('#sms-button').show();
	if (phone!= null){
		$('#sms-button').attr("href", "sms:?body="+encodeURIComponent(document.title)+  encodeURIComponent(phone));
	}

}  
