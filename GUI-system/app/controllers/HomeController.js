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

    adults: function()
    {
        if ( ! this.adultsView)
        {
            this.adultsView = this.render({
                xtype: 'HomeAdults',
            });
        }
        this.application.viewport.setActiveItem(this.adultsView);
    },
	
     air: function()
    {
        if ( ! this.airView)
        {
            this.airView = this.render({
                xtype: 'HomeAir',
            });
        }
        this.application.viewport.setActiveItem(this.airView);
    },
	 breastfeeding: function()
    {
        if ( ! this.breastfeedingView)
        {
            this.breastfeedingView = this.render({
                xtype: 'HomeBreastfeeding',
            });
        }
        this.application.viewport.setActiveItem(this.breastfeedingView);
    },
	 children5: function()
    {
        if ( ! this.children5View)
        {
            this.children5View = this.render({
                xtype: 'HomeChildren5',
            });
        }
        this.application.viewport.setActiveItem(this.children5View);
    },
	 children6: function()
    {
        if ( ! this.children6View)
        {
            this.children6View = this.render({
                xtype: 'HomeChildren6',
            });
        }
        this.application.viewport.setActiveItem(this.children6View);
    },
	 healthy: function()
    {
        if ( ! this.healthyView)
        {
            this.healthyView = this.render({
                xtype: 'HomeHealthy',
            });
        }
        this.application.viewport.setActiveItem(this.healthyView);
    },
	 infants: function()
    {
        if ( ! this.infantsView)
        {
            this.infantsView = this.render({
                xtype: 'HomeInfants',
            });
        }
        this.application.viewport.setActiveItem(this.infantsView);
    },
	 lead: function()
    {
        if ( ! this.leadView)
        {
            this.leadView = this.render({
                xtype: 'HomeLead',
            });
        }
        this.application.viewport.setActiveItem(this.leadView);
    },
	 maternal: function()
    {
        if ( ! this.maternalView)
        {
            this.maternalView = this.render({
                xtype: 'HomeMaternal',
            });
        }
        this.application.viewport.setActiveItem(this.maternalView);
    },
	 mothers: function()
    {
        if ( ! this.mothersView)
        {
            this.mothersView = this.render({
                xtype: 'HomeMothers',
            });
        }
        this.application.viewport.setActiveItem(this.mothersView);
    },
	 quit: function()
    {
        if ( ! this.quitView)
        {
            this.quitView = this.render({
                xtype: 'HomeQuit',
            });
        }
        this.application.viewport.setActiveItem(this.quitView);
    },
	 stop: function()
    {
        if ( ! this.stopView)
        {
            this.stopView = this.render({
                xtype: 'HomeStop',
            });
        }
        this.application.viewport.setActiveItem(this.stopView);
    },
	 wic: function()
    {
        if ( ! this.wicView)
        {
            this.wicView = this.render({
                xtype: 'HomeWIC',
            });
        }
        this.application.viewport.setActiveItem(this.sicView);
    },
});