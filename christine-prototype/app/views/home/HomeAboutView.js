App.views.HomeAbout = Ext.extend(Ext.Panel, {
    html: '<a href="#Home/dental" class="menu-item">Dental Clinic</a> <a href="#Home/hospital" class="menu-item">Hospitals</a> <a href="#Home/vision" class="menu-item">Vision</a>',
    scroll: 'vertical',
    styleHtmlContent: true,
    style: 'background: #d8efed',
});
Ext.reg('HomeAbout', App.views.HomeAbout);