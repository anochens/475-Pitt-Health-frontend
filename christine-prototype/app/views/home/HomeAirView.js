App.views.HomeAir = Ext.extend(Ext.Panel, {
    html: '<h2>Air Quality Monitor</h2>',
    scroll: 'vertical',
    styleHtmlContent: true,
    style: 'background: #d8efed'	
});
Ext.reg('HomeAir', App.views.HomeAir);