Ext.define('GS.view.GlobalToolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'globaltoolbar',
    cls: 'projectSelector',

    config: {
        docked: 'top',
        items: [{
            iconCls: 'arrow_down',
            iconMask: true,
            ui: 'plain',
            action: 'chooseCategroies'
        },{
            xtype: 'spacer'
        }]
    }
});
