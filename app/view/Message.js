Ext.define('GS.view.Message', {
  extend: 'Ext.TabPanel',
  xtype: 'message',

  requires: [
    'Ext.List'
  ],
  config: {
    title: '消息',
    iconCls: 'team',
    ui: 'light',
    // badgeText: '5',
    defaults: {
        scrollable: true
    },
    items: [
      {
        xtype: 'titlebar',
        docked: 'top',
        title: '消息'
      },
      {
        xtype: 'notification'
      },
      {
        xtype: 'privatemsg'
      }
    ]
  }
})

