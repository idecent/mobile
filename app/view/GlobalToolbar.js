Ext.define('GS.view.GlobalToolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'globaltoolbar',
    cls: 'projectSelector',

    config: {
        docked: 'top',
        ui: 'light',
        items: [{
            iconCls: 'arrow_down',
            iconMask: true,
            ui: 'plain',
            action: 'chooseCategroies'
        }]
    }
});
