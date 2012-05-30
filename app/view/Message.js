Ext.define('GS.view.Message', {
  extend: 'Ext.navigation.View',
  xtype: 'message',
  requires: [
    'Ext.dataview.List',
    'Ext.data.proxy.JsonP',
    'Ext.data.Store',
    'Ext.SegmentedButton'
  ],
  config: {
    title: '消息',
    iconCls: 'team',
    badgeText: '5',
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
      },
      {
        xtype: 'titlebar',
        docked: 'top',
        title: '消息'
      },
      {
        xtype: 'segmentedbutton',
        docked: 'top',
        layout: {
            align: 'center',
            pack: 'center',
            type: 'hbox'
        },
        items: [{
              width: '50%',
              text: '通知',
              pressed: true
          },
          {
              width: '50%',
              text: '私信'
          }
        ]
      }
    ]
  }
})

