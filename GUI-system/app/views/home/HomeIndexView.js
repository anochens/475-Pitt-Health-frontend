App.views.HomeIndex = Ext.extend(Ext.Panel, {
	html: '<a href="#Home/mothers" class="menu-item">Pregnant Mothers</a> <a href="#Home/infants" class="menu-item">Infants <2 yo</a>  <a href="#Home/children5" class="menu-item">Children <5 yo</a> <a href="#Home/children6" class="menu-item">Children <6 yo</a> <a href="#Home/adults" class="menu-item">Adults (General)</a>',
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
});
Ext.reg('HomeIndex', App.views.HomeIndex);