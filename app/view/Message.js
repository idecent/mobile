Ext.define('GS.view.Message', {
  extend: 'Ext.TabPanel',
  xtype: 'message',
  // requires: [
  // ],
  config: {
    title: '消息',
    iconCls: 'team',
    // badgeText: '5',
    // navigationBar: {
    //   hidden: true
    // },
    items: [
      {
        xtype: 'titlebar',
        docked: 'top',
        title: '消息'
      },
      {
        xtype: 'privatemsg',
      },
      {
        xtype: 'notification'
      }
    ]
  }
})

