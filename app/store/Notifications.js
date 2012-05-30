Ext.define('GS.store.Notifications', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['published_at','content'],
        data: [{
            published_at:   '5-11 21:30',
            content: '【摇滚实验舞台剧《大海 迷途》】有新动态'
        },{
            published_at:   '5-11 21:30',
            name: '【摇滚实验舞台剧《大海 迷途》】成功了'
        }]
    }
});
