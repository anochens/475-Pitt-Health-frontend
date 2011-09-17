App.views.HomeIndex = Ext.extend(Ext.Panel, {
	html: '<a href="#Home/about" class="menu-item">North</a> <a href="#Home/south" class="menu-item">South</a>  <a href="#Home/east" class="menu-item">East</a> <a href="#Home/west" class="menu-item">West</a>',
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
});
Ext.reg('HomeIndex', App.views.HomeIndex);