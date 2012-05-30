Ext.define('GS.store.Categories', {
    extend: 'Ext.data.Store',
    config: {
        fields: ['id', 'name'],
        data: [{
            id:   'Recommend',
            name: '推荐项目'
        },{
            id:   'Latest',
            name: '最新上线'
        },{
            id:   'Ended',
            name: '已经结束'
        }]
    }
});
