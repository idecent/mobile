Ext.define('GS.view.Contact', {
  extend: 'Ext.form.Panel',
  xtype: 'contactform',
  requires: [
    'Ext.form.FieldSet',
    'Ext.field.Email'
  ],
  config: {
    title: '我的',
    iconCls: 'user',
    url: 'test.php',
    items: [
      {
        xtype: 'fieldset',
        
        instructions: '(测试)',
        items: [
          {
            xtype: 'textfield',
            name: 'name',
            label: '姓名'
          },
          {
            xtype: 'emailfield',
            name: 'email',
            label: 'Email'
          },
          {
            xtype: 'textareafield',
            name: 'message',
            label: '留言'
          }
        ]
      },
      {
        xtype: 'button',
        text: '发送',
        ui: 'confirm',
        handler: function(){
          this.up('contactform').submit();
        }
      }
    ]
  }
})