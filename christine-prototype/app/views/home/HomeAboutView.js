App.views.HomeAbout = Ext.extend(Ext.Panel, {
    html: '<a href="#Home/healthystart" class="menu-item">Father of Baby Involved</a> <a href="#Home/hospital" class="menu-item">Hospitals</a> <a href="#Home/vision" class="menu-item">Vision</a>',
    scroll: 'vertical',
    styleHtmlContent: true,
    style: 'background: #d8efed',
});
Ext.reg('HomeAbout', App.views.HomeAbout);