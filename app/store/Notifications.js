Ext.define('GS.store.Notifications', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GS.model.Notification',
        data: [{
            cover: 'resources/images/thumb_demo.jpeg',
            published_at:   '5-11 21:30',
            content: '【摇滚实验舞台剧《大海 迷途》】有新动态'
        },{
            cover: 'resources/images/thumb_demo.jpeg',
            published_at:   '5-11 21:30',
            content: '【摇滚实验舞台剧《大海 迷途》】成功了'
        }]
    }
});
