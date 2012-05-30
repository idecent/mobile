Ext.define('GS.view.More', {
  extend: 'Ext.Panel',
  xtype: 'morepanel',
  config: {
    title: '更多',
    iconCls: 'more',
    scrollable: true,
    styleHtmlContent: true,

    html: ['<img src="resources/images/logo.png" />',
            '<h1>点名时间手机app</h1>',
            "<p>更多页面</p>",
            '<h2>Demohour (1.0.0)</h2>'].join("")
  }
})

