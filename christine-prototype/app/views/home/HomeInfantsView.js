App.views.HomeInfants = Ext.extend(Ext.Panel, {
    html: '<a href="#Home/wic" class="menu-item">Nutrition Risk</a> <a href="#Home/healthy" class="menu-item">Family with poor resources or special needs</a> <a href="#Home/breastfeeding" class="menu-item">Mother is breastfeeding/wants to breastfeed</a>  <a href="#Home/quit" class="menu-item">Smoker in the house</a> <a href="#Home/lead" class="menu-item">Risk for lead poisoning or elevated blood lead level</a> <a href="#Home/air" class="menu-item">Asthma or lung disease</a>',
    scroll: 'vertical',
    styleHtmlContent: true,
    style: 'background: #d8efed',
});
Ext.reg('HomeInfants', App.views.HomeInfants);

