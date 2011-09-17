Ext.regController('Home', {
 
    // index action
	index: function(options)
    {
        if ( ! this.indexView)
        {
            this.indexView = this.render({
                xtype: 'HomeIndex',
            });
        }
        
        var backBtn = this.application.viewport.query('#backBtn')[0];
        backBtn.hide();
     
        this.application.viewport.setActiveItem(this.indexView, options.animation);
    },
    
    // about action
    about: function()
    {
        if ( ! this.aboutView)
        {
            this.aboutView = this.render({
                xtype: 'HomeAbout',
            });
        }
     
        var backBtn = this.application.viewport.query('#backBtn')[0];
        backBtn.show();
        
        backBtn.setHandler(function()
		{
        	Ext.dispatch({
        	    controller: 'Home',
        	    action: 'index',
        	    historyUrl: 'Home/index',
        	    //
        	    animation: {
        	        type: 'slide',
        	        reverse: true,
        	    },
        	});
		});
        
        this.application.viewport.setActiveItem(this.aboutView);
    },
    // about action
    dental: function()
    {
        if ( ! this.dentalView)
        {
            this.dentalView = this.render({
                xtype: 'HomeDental',
            });
        }
     
        var backBtn = this.application.viewport.query('#backBtn')[0];
        backBtn.show();
        
        backBtn.setHandler(function()
		{
        	Ext.dispatch({
        	    controller: 'Home',
        	    action: 'about',
        	    historyUrl: 'Home/about',
        	    //
        	    animation: {
        	        type: 'slide',
        	        reverse: true,
        	    },
        	});
		});
        
        this.application.viewport.setActiveItem(this.dentalView);
    },
    
	
});