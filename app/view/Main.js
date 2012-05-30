Ext.define("GS.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'GS.view.Project',
        'GS.view.Contact',
        'GS.view.GlobalToolbar',
        'GS.view.More',
        'GS.view.Message',
        'GS.view.CategoryPicker'
    ],
    //requires: ['Ext.TitleBar'],
    xtype: 'mainview',
    config: {
        fullscreen: true,
        layout: {
            animation: {
                duration:0
            }
        },
        //tabBarPosition: 'bottom',
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        items: [
            {
                xtype: 'categorypicker'
            },

            {
                xtype: 'project'
            },
            {
                xtype: 'message'
            },
            {
                xtype: 'contactform'
            },
            {
                xtype: 'morepanel'
            }
        ]
    }
});