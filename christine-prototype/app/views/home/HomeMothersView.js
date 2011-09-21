App.views.HomeMothers = Ext.extend(Ext.Panel, {
    html: '<a href="#Home/healthy" class="menu-item">Father of baby is involved</a> <a href="#Home/maternal" class="menu-item">Poor resources, high risk pregnancy</a> <a href="#Home/wic" class="menu-item">Poor nutrition</a><a href="#Home/quit" class="menu-item">Smoker</a>   ', 
    scroll: 'vertical',
    styleHtmlContent: true,
    style: 'background: #d8efed',
});
Ext.reg('HomeMothers', App.views.HomeMothers);
