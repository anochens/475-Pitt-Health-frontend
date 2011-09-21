App.views.HomeAdults = Ext.extend(Ext.Panel, {
    html: '<a href="#Home/air" class="menu-item">Asthma/COPD/lung disease</a> <a href="#Home/quit" class="menu-item">PA Quit Helpline</a>',
    scroll: 'vertical',
    styleHtmlContent: true,
    style: 'background: #d8efed',
});
Ext.reg('HomeAdults', App.views.HomeAdults);