

#### 普通的

```html  Python
<s-cascader 
    v-model="value" 
    @change="changeOption" 
    placeholder="请选择数字"
    :list="options" 
    symbol=" / "
>
</s-cascader>
<s-cascader 
    v-model="value1" 
    @change="changeOption" 
    placeholder="请选择数字"
    :list="options" 
    symbol=" -- "
>
</s-cascader>

```

#### options 

```html  Python
options: [{
    value: 'zhinan',
    label: '指南',
    children: [{
        value: 'shejiyuanze',
        label: '设计原则',
        children: [{
        value: 'yizhi',
        label: '一致'
        }, {
        value: 'fankui',
        label: '反馈'
        }, {
        value: 'xiaolv',
        label: '效率'
        }, {
        value: 'kekong',
        label: '可控'
        }]
    }, {
        value: 'daohang',
        label: '导航',
        children: [
        ]
    }]
    }, {
    value: 'zujian',
    label: '组件',
    children: [{
        value: 'basic',
        label: 'Basic',
        children: [{
        value: 'layout',
        label: 'Layout 布局'
        }, {
        value: 'color',
        label: 'Color 色彩'
        }, {
        value: 'typography',
        label: 'Typography 字体'
        }, {
        value: 'icon',
        label: 'Icon 图标'
        }, {
        value: 'button',
        label: 'Button 按钮'
        }]
    }, {
        value: 'form',
        label: 'Form',
        children: [{
        value: 'radio',
        label: 'Radio 单选框'
        }, {
        value: 'checkbox',
        label: 'Checkbox 多选框'
        }, {
        value: 'input',
        label: 'Input 输入框'
        }, {
        value: 'input-number',
        label: 'InputNumber 计数器'
        }, {
        value: 'select',
        label: 'Select 选择器'
        }, {
        value: 'cascader',
        label: 'Cascader 级联选择器'
        }, {
        value: 'switch',
        label: 'Switch 开关'
        }, {
        value: 'slider',
        label: 'Slider 滑块'
        }, {
        value: 'time-picker',
        label: 'TimePicker 时间选择器'
        }, {
        value: 'date-picker',
        label: 'DatePicker 日期选择器'
        }, {
        value: 'datetime-picker',
        label: 'DateTimePicker 日期时间选择器'
        }, {
        value: 'upload',
        label: 'Upload 上传'
        }, {
        value: 'rate',
        label: 'Rate 评分'
        }, {
        value: 'form',
        label: 'Form 表单'
        }]
    }, {
        value: 'data',
        label: 'Data',
        children: [{
        value: 'table',
        label: 'Table 表格'
        }, {
        value: 'tag',
        label: 'Tag 标签'
        }, {
        value: 'progress',
        label: 'Progress 进度条'
        }, {
        value: 'tree',
        label: 'Tree 树形控件'
        }, {
        value: 'pagination',
        label: 'Pagination 分页'
        }, {
        value: 'badge',
        label: 'Badge 标记'
        }]
    }, {
        value: 'notice',
        label: 'Notice',
        children: [{
        value: 'alert',
        label: 'Alert 警告'
        }, {
        value: 'loading',
        label: 'Loading 加载'
        }, {
        value: 'message',
        label: 'Message 消息提示'
        }, {
        value: 'message-box',
        label: 'MessageBox 弹框'
        }, {
        value: 'notification',
        label: 'Notification 通知'
        }]
    }, {
        value: 'navigation',
        label: 'Navigation',
        children: [{
        value: 'menu',
        label: 'NavMenu 导航菜单'
        }, {
        value: 'tabs',
        label: 'Tabs 标签页'
        }, {
        value: 'breadcrumb',
        label: 'Breadcrumb 面包屑'
        }, {
        value: 'dropdown',
        label: 'Dropdown 下拉菜单'
        }, {
        value: 'steps',
        label: 'Steps 步骤条'
        }]
    }, {
        value: 'others',
        label: 'Others',
        children: [{
        value: 'dialog',
        label: 'Dialog 对话框'
        }, {
        value: 'tooltip',
        label: 'Tooltip 文字提示'
        }, {
        value: 'popover',
        label: 'Popover 弹出框'
        }, {
        value: 'card',
        label: 'Card 卡片'
        }]
    }, {
        value: 'others',
        label: 'Others',
        children: [{
        value: 'dialog',
        label: 'Dialog 对话框'
        }, {
        value: 'tooltip',
        label: 'Tooltip 文字提示'
        }, {
        value: 'popover',
        label: 'Popover 弹出框'
        }, {
        value: 'card',
        label: 'Card 卡片'
        }]
    }, {
        value: 'others',
        label: 'Others',
        children: [{
        value: 'dialog',
        label: 'Dialog 对话框'
        }, {
        value: 'tooltip',
        label: 'Tooltip 文字提示'
        }, {
        value: 'popover',
        label: 'Popover 弹出框'
        }, {
        value: 'card',
        label: 'Card 卡片'
        }]
    }]
    }, {
    value: 'ziyuan',
    label: '资源',
    children: []
}],

```


#### Props 最多支持3层选择
### 参数说明 s-select

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| value| Array |绑定的value值['','','']|   |    |
| list |  Array  |数据  | 结构如上  |  |
| placeholder |  String  |提示语  |   |  |
| symbol |  String  |连接符（自定义）  |   | - |



#### Props
### 参数说明 s-option

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| value|  |选项的value值|   |    |
| disabled |  Boolean  |禁用  |  true,false | false |


#### Events
### 事件说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| change |  Events  |value值  |  tvale |  |
