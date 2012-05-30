Ext.define('GS.view.Notification', {
  extend: 'Ext.navigation.View',
  xtype: 'notification',
  requires: [
    'Ext.dataview.List',
    'Ext.data.proxy.JsonP',
    'Ext.data.Store'
  ],
  config: {
    title: '通知',
    
    // badgeText: '5',
    navigationBar: {
      hidden: true
    },
    items: [
      {
        xtype: 'list',
        itemTpl: "{title}",
        title: '消息',

        store: {
          autoLoad: true,
          fields: [
            'title', 'link', 'author', 'contentSnippet', 'content',
            {name: 'leaf', defaultValue: true}
          ],

          proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
           reader: {
              type: 'json',
              rootProperty: 'responseData.feed.entries'
            }
          }
        }
      }
    ]
  }
})

