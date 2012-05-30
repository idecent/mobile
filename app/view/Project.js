Ext.define('GS.view.Project', {
  extend: 'Ext.navigation.View',
  xtype: 'project',
  requires: [
    'Ext.dataview.List',
    'Ext.data.proxy.JsonP',
    'Ext.data.Store',
    'Ext.field.Select'
  ],
  config: {
    title: '项目',
    iconCls: 'home',
    listeners: {
          back: function() {
              Ext.getCmp('projectSelctorBtn').show();
              //TODO:  pop project detail content
          }
    },   
    navigationBar: {
      ui: 'dark',
      items: [{xtype: 'globaltoolbar',
              id: 'projectSelctorBtn'
            }],
      hidden: false
    },
    items: [{
              xtype: 'list',
              itemTpl: Ext.create(
                'Ext.XTemplate',
                '<div class="projects-wrapper">',
                '   <img src="{cover}" />',
                '   <div class="project">',
                '       <span class="posted">{name}</span>',
                '       <h2>U-{user_name} L-{location}</h2>',
                '       <p>已达到{percentage}, 已获支持￥{gained_money}, 剩余时间{remaining_days}</p>',
                '   </div>',
                '</div>'
                ),
                store: 'RecommendProjects',
                title: '推荐项目'

            }]
  }
})






// Ext.define('GS.view.Home', {
//   extend: 'Ext.Panel',
//   xtype: 'homepanel',
//   config: {
//     title: '首页',
//     iconCls: 'home',
//     cls: 'home', 
//     scrollable: true,
//     styleHtmlContent: true,

//     html: ['<img src="resources/images/logo.png" />',
//             '<h1>点名时间手机app</h1>',
//             "<p>你可以在这里发起项目，向公众推广，并获得资金和支持，去完成你的梦想！ 你也可以浏览各种有趣的项目，支持创意，预购大家的梦想！</p>",
//             '<h2>Demohour (1.0.0)</h2>'].join("")
//   }
// })
//**************************Original Code*******************//
// Ext.define('GS.view.Project', {
//   extend: 'Ext.navigation.View',
//   xtype: 'project',
//   requires: [
//     'Ext.dataview.List',
//     'Ext.data.proxy.JsonP',
//     'Ext.data.Store',
//     'Ext.field.Select'
//   ],
//   config: {
//     title: '项目',
//     iconCls: 'home',
//     navigationBar: {
//       hidden: true
//     },
//     items: [{
//           xtype: 'list',
//           itemTpl: "{title}",
//           title: '项目列表',
    
//           store: {
//             autoLoad: true,
//             fields: [
//               'title', 'link', 'author', 'contentSnippet', 'content',
//               {name: 'leaf', defaultValue: true}
//             ],
    
//             proxy: {
//               type: 'jsonp',
//               url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
//              reader: {
//                 type: 'json',
//                 rootProperty: 'responseData.feed.entries'
//               }
//             }
//           }
//         }]
//   }
// })

//**************************Original Code*******************//

// Ext.define('GS.view.Home', {
//     extend: 'Ext.Container',
//     xtype: 'project'
//     config: {
//         layout: {
//             type: 'vbox'
//         },
//         items: [
//             {
//                 xtype: 'container',
//                 items: [
//                     {
//                         xtype: 'selectfield',
//                         label: 'Field'
//                     },
//                     {
//                         xtype: 'navigationview'

//                     }
//                 ]
//             }
//         ]
//     }

// });


// // Ext.create('Ext.Container', {
// //     fullscreen: true,
// //     layout: 'vbox',
// //     items: [
// //         {
// //             xtype: 'panel',
// //             html: 'message list',
// //             flex: 1
// //         },
// //         {
// //             xtype: 'panel',
// //             html: 'message preview',
// //             flex: 2
// //         }
// //     ]
// // });