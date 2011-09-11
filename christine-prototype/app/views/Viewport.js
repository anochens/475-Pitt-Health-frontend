App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    dockedItems: [
        {
        	xtype: 'toolbar',
        	title: 'Christine',
        	items: [
    	        {
    	            text: 'Back',
    	            itemId: 'backBtn',
    	            ui: 'back',
    	        },
    	        {xtype: 'spacer'},
    	        {
    	            itemId: 'searchBtn',
    	            iconCls: 'search',
    	            iconMask: true,
    	            ui: 'action',
    	        },
    	    ],
        },
    ],
});