Ext.define('GS.model.Project', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'intro', type: 'auto'},
            {name: 'name', type: 'auto'},
            {name: 'remaining_days', type: 'auto'},
            {name: 'percentage', type: 'auto'},
            {name: 'gained_money', type: 'auto'}
        ]
    }
});