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

    // recent action
    recent: function()
    {
        if ( ! this.recentView)
        {
            this.recentView = this.render({
                xtype: 'HomeRecent',
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
        
        this.application.viewport.setActiveItem(this.recentView);
    },
patientTypes: function()
    {
        if ( ! this.patientTypesView)
        {
            this.patientTypesView = this.render({
                xtype: 'HomePatientTypes',
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
        
        this.application.viewport.setActiveItem(this.patientTypesView);
    },

pregnantMothers: function()
	    {
		console.log("int function");
	        if ( ! this.pregnantMothersView)
	        {
	            this.pregnantMothersView = this.render({
	                xtype: 'HomePregnantMothers',
	            });
	        }

	        var backBtn = this.application.viewport.query('#backBtn')[0];
	        backBtn.show();

	        backBtn.setHandler(function()
			{
	        	Ext.dispatch({
	        	    controller: 'Home',
	        	    action: 'patientTypes',
	        	    historyUrl: 'Home/patientTypes',
	        	    //
	        	    animation: {
	        	        type: 'slide',
	        	        reverse: true,
	        	    },
	        	});
			});

	        this.application.viewport.setActiveItem(this.pregnantMothersView);
	    },
});