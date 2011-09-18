Ext.regApplication({
    name: 'App',
    defaultUrl: 'Home/index',
    
    launch: function()
    {
        this.viewport = new App.views.Viewport();
     
        this.viewport.query('#searchBtn')[0].setHandler(function(){
            Ext.ControllerManager.get('Search').index();
        });
    },
});