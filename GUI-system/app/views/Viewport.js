App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    dockedItems: [
        {
        	xtype: 'toolbar',
        	title: 'Health Resources',
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