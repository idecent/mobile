Ext.define('GS.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainPanel: 'mainview',
            project: 'project',
            globalToolbar: 'globaltoolbar',
            categoryChooserButton: 'button[action=chooseCategroies]',
            categoryBubble: 'categorypicker',
            projectList: 'project list',
            categoryList: 'categorypicker list'
        },
        control: {
            'project list': {
                itemsingletap: 'showPost',
                itemdoubletap: 'doubleTap'
                //itemtaphold: 'sayHoldme'
                

            },
            categoryChooserButton: {
                tap: 'showCategoryChooser'
            },
            categoryList: {
                select: 'changeCategory'
            }
        }
    },
    // sayHoldme: function(list, item, index, e, eOpts) {
    //     console.log("hold on " + item.name + "....");
    // },

    doubleTap: function(list, item, index, e, eOpts) {
        console.log("doble tap on" + item.name + "...");
    },

    showCategoryChooser: function(button) {
        this.getCategoryBubble().showBy(button)
    },

    changeCategory: function(dataview, record) {
        var categories = this.getCategories(),
            targetCategory = record.data.id,
            targetCategoryName = record.data.name,
            main = this.getMainPanel(),
            interval;
        var navigationView = this.getProject();
        var navigationBar = navigationView.getNavigationBar();
        main.setMasked({
            xtype: 'loadmask',
            message: '正在加载...',
            indicator: true
        });
        
        var projectslist = this.getProjectList();
        this.getCategoryBubble().hide();

        // categories[targetCategory].removeAttributes('disabled');
        interval = setInterval(function(){
            // if (categories[targetCategory].name) {
                clearInterval(interval);
                var projects = Ext.getStore(targetCategory + 'Projects');
                projectslist.setStore(projects);
                projectslist.deselectAll();

                navigationBar.titleComponent.setTitle(targetCategoryName);
            //     for(name in names) {
            //         if(name != targetCategory) {

            //         }
            //     }
            // }
            main.unmask();
        }, 100);
    },

    getCategories: function() {
        var categories = {}, store;
        if (!this.categories) {
            store = this.getCategoryList().getStore();

            for (var i = store.data.items.length - 1; i >= 0; i--){
                category = store.data.items[i].data;
                categories[category['id']] = document.getElementById(category['id'])
            };
            this.categories = categories;
        }
        return this.categories;
    },

    showPost: function(list, index, element, record, panel){
        // this.getProject().getNavigationBar().hide();
        var navigationView = this.getProject()
        
        console.log(this.getProject().getNavigationBar())
        if (Ext.getCmp('focusProjectBtn') == undefined) {
            this.getProject().getNavigationBar().add([
              {
                  xtype: 'button',
                  id: 'focusProjectBtn',
                  align: 'right',
                  ui: 'action',
                  handler : function() {
                    // alert("需要登陆");
                    console.log("需要登陆");
                  },
                  //iconCls: 'compose',
                  text: '关注',
                  iconMask: true
              }
            ]);

        }else{
            Ext.getCmp('focusProjectBtn').show();
        }

        //console.log(this.getGlobalToolbar());
        //console.log(this.getProject().getInnerItems().length)
        var projectPanel = Ext.create('Ext.TabPanel', { 
            fullscreen: true,
            tabBarPosition: 'top',
            title: record.get('sponsor_count') + '位支持者',
            
            defaults: {
                scrollable: true
            },
            styleHtmlContent: true,
            items: [{
                    
                    title: '项目介绍',
                    html: record.get('content'),
                },
                {
                    title: '回报支持',
                    
                    html: '回报支持内容。。。'
                },
                {
                    title: '最新动态',
                    
                    html: '最新动态...'
                }
            ]

        });

        navigationView.push(projectPanel);

        this.getGlobalToolbar().hide();
        var navigationBar = navigationView.getNavigationBar();
        var backButton = navigationBar.getBackButton();


        // console.log(backButton);
        // backButton.on('tap', alert("xxx"), this, {
        //     single: false,
        //     delay: 100000000,
        //     order: "after"
        // });
       
        //backButton.hide();

        // navigationBar.add([
        //   {
        //         xtype : 'button',
        //         text : '后退',
        //         ui : 'back',
        //         handler : function() {
        //             this.onBack();
        //         },
        //         onBack : function() {
                    
        //         }

        //     }
        // ]);


        // var backButton = this.items[0];
        // backButton.hide();
        //this.getProject().pop(this.getProject().length);
        // this.getProject().pop();
    }
});