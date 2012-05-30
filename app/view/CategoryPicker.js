Ext.define('GS.view.CategoryPicker', {
    extend: 'Ext.Panel',
    xtype: 'categorypicker',
    requires: ['Ext.dataview.List'],

    config: {
        modal: true,
        hidden: true,
        left: 0,
        top: 0,
        width: 220,
        height: 150,
        layout: 'fit',

        items: [{
            xtype: 'list',
            store: 'Categories',
            itemTpl: '{name}'
        }]
    }
});