App.views.HomePatientTypes = Ext.extend(Ext.Panel, {
    	html: '<a href="#Home/PregnantMothers" class="menu-item">Pregnant Mothers</a> <a href="#Home/Infants<2yo" class="menu-item">Infants <2 Years Old</a> <a href="#Home/Children<5yo" class="menu-item">Children <5 Years Old</a> <a href="#Home/Children<6yo" class="menu-item">Children <6 Years Old</a> <a href="#Home/Adults" class="menu-item">Adults</a>',
		scroll: 'vertical',
		styleHtmlContent: true,
		style: 'background: #d8e2ef',
	});
	Ext.reg('HomePatientTypes', App.views.HomePatientTypes);
	