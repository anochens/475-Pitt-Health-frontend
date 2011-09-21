App.views.HomeChildren5 = Ext.extend(Ext.Panel, {
    html: '<a href="#Home/healthy" class="menu-item">Family with poor resources or special needs</a> <a href="#Home/quit" class="menu-item">Smoker in the house</a> <a href="#Home/lead" class="menu-item">Risk for lead poisoning or elevated blood lead level</a> <a href="#Home/air" class="menu-item">Asthma or lung disease</a>',
    scroll: 'vertical',
    styleHtmlContent: true,
    style: 'background: #d8efed',
});
Ext.reg('HomeChildren5', App.views.HomeChildren5);

