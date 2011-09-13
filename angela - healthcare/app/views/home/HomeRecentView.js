App.views.HomeRecent = Ext.extend(Ext.Panel, {
    html: '<h2>Recent</h2> <p>Recent Views & Searches</p>',
    scroll: 'vertical',
    styleHtmlContent: true,
    style: 'background: #d8efed',
});
Ext.reg('HomeRecent', App.views.HomeRecent);