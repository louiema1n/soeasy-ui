webpackJsonp([1],{"1hau":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h4",[t._v("代码")]),t._v(" "),e("h4",[t._v("表格1 tHead key如果要设为序号时  name值为#；")]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("s-table")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":list")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"list"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":tHead")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tHead"')]),t._v(" >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("s-table")]),t._v(">")]),t._v('\ndata(){\n    return {\n        list:[\n            {name:"杨**",age:16,sex:"男",adress:"浙江神阿斯利康大家爱丽丝的骄傲临时搭建ask了"},\n            {name:"张**",age:33,sex:"男",adress:"阿三大苏打实打实大洛杉矶肯德基爱丽丝的"},\n            {name:"翰**",age:45,sex:"女",adress:"讨论客人今天了客人就退了就特开了"},\n            {name:"李**",age:66,sex:"男",adress:"从v这些邻居快节奏旋律节奏旋律"},\n            {name:"德**",age:55,sex:"女",adress:"和老公开发和两个房间快乐和开发计划落空"},\n        ],\n        tHead:[\n            {key:"序号",name:"#",width:"50px"},\n            {key:"名字",name:"name",width:"150px"},\n            {key:"年龄",name:"age",width:"100px"},\n            {key:"性别",name:"sex",width:"80px"},\n            {key:"地址",name:"adress"},\n        ],\n    }\n}\n')])]),t._v(" "),e("h4",[t._v("表格2  加入操作按钮  tHead1数组最后一个的name值为空  border 为边框属性")]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("s-table")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":list")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"list"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":tHead")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tHead1"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("border")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("td")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-if")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"tHead1[tHead1.length-1].name==''\"")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":style")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"{width:tHead1[tHead1.length-1].width}"')]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("style")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"color:#409eff"')]),t._v(">")]),t._v("删除"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("td")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("s-table")]),t._v(">")]),t._v('\ndata(){\n    return {\n        list:[\n            {name:"杨**",age:16,sex:"男",adress:"浙江神阿斯利康大家爱丽丝的骄傲临时搭建ask了"},\n            {name:"张**",age:33,sex:"男",adress:"阿三大苏打实打实大洛杉矶肯德基爱丽丝的"},\n            {name:"翰**",age:45,sex:"女",adress:"讨论客人今天了客人就退了就特开了"},\n            {name:"李**",age:66,sex:"男",adress:"从v这些邻居快节奏旋律节奏旋律"},\n            {name:"德**",age:55,sex:"女",adress:"和老公开发和两个房间快乐和开发计划落空"},\n        ],\n        tHead1:[\n            {key:"名字",name:"name",width:"150px"},\n            {key:"年龄",name:"age",width:"100px"},\n            {key:"性别",name:"sex",width:"80px",textAlign:"center"},\n            {key:"地址",name:"adress"},\n            {key:"操作",name:"",width:"100px"},\n        ]\n    }\n}\n')])]),t._v(" "),e("h4",[t._v("表格3  固定头部  s-table 由一个有id属性的div 包起来，然后将id 传入组件      加上fixed  和 heght 属性一起使用  thead中的width也必须一起使用")]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v("  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"fixeds"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("s-table")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"fixeds"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":list")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"list"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":tHead")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tHead1"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("border")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("fixed")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"100px"')]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("td")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-if")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"tHead1[tHead1.length-1].name==''\"")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":style")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"{width:tHead1[tHead1.length-1].width}"')]),t._v(">")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("style")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"color:#409eff"')]),t._v(">")]),t._v("详情"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a")]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("td")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("s-table")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v('\ndata(){\n    return {\n        list:[\n            {name:"杨**",age:16,sex:"男",adress:"浙江神阿斯利康大家爱丽丝的骄傲临时搭建ask了"},\n            {name:"张**",age:33,sex:"男",adress:"阿三大苏打实打实大洛杉矶肯德基爱丽丝的"},\n            {name:"翰**",age:45,sex:"女",adress:"讨论客人今天了客人就退了就特开了"},\n            {name:"李**",age:66,sex:"男",adress:"从v这些邻居快节奏旋律节奏旋律"},\n            {name:"德**",age:55,sex:"女",adress:"和老公开发和两个房间快乐和开发计划落空"},\n        ],\n        tHead1:[\n            {key:"名字",name:"name",width:"150px"},\n            {key:"年龄",name:"age",width:"100px"},\n            {key:"性别",name:"sex",width:"80px",textAlign:"center"},\n            {key:"地址",name:"adress"},\n            {key:"操作",name:"",width:"100px"},\n        ]\n    }\n}\n')])]),t._v(" "),e("h4",[t._v("Props")]),t._v(" "),e("h3",[t._v("参数说明")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("参数说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("border")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("禁用")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("true,false")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("表格高度")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("”“")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v('""')])]),t._v(" "),e("tr",[e("td",[t._v("list")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Array")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("传入的数据")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("”“")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("[]")])]),t._v(" "),e("tr",[e("td",[t._v("tHead")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Array")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("头部的数组参数")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("”“")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v('""')])])])]),t._v(" "),e("h4",[t._v("tHead")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("参数说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("key")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("头部的名称")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v('""')]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",[t._v("name")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v('list数据的key值  为""用于操作按钮显示   为#展示序号')]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("td的宽度  在固定头部的时候必须给")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("val")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",[t._v("textAlign")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("对齐方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("center ,left,right")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("left")])])])])])}]},n=e("VU/8")(null,a,!1,null,null,null);s.default=n.exports},"7MlI":function(t,s,e){var a=e("Z1CH");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("ce782e4c",a,!0,{})},AFfM:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("tgzO"),n={components:{doc:e.n(a).a},data:function(){return{list:[{name:"杨**",age:16,sex:"男",adress:"浙江神阿斯利康大家爱丽丝的骄傲临时搭建ask了1"},{name:"张**",age:33,sex:"男",adress:"阿三大苏打实打实大洛杉矶肯德基爱丽丝的"},{name:"翰**",age:45,sex:"女",adress:"讨论客人今天了客人就退了就特开了"},{name:"李**",age:66,sex:"男",adress:"从v这些邻居快节奏旋律节奏旋律"},{name:"德**",age:55,sex:"女",adress:"和老公开发和两个房间快乐和开发计划落空2"}],tHead:[{key:"序号",name:"#",width:"50px"},{key:"名字",name:"name",width:"150px"},{key:"年龄",name:"age",width:"100px"},{key:"性别",name:"sex",width:"80px"},{key:"地址",name:"adress"}],tHead1:[{key:"名字",name:"name",width:"150px"},{key:"年龄",name:"age",width:"100px"},{key:"性别",name:"sex",width:"80px",textAlign:"center"},{key:"地址",name:"adress"},{key:"操作",name:"",width:"100px"}]}}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"icon"}},[e("p",{staticClass:" f30 mb20"},[t._v("1.textarea示例")]),t._v(" "),t._m(0),t._v(" "),e("s-table",{attrs:{list:t.list,tHead:t.tHead}}),t._v(" "),t._m(1),t._v(" "),e("s-table",{attrs:{list:t.list,tHead:t.tHead1,border:""}},[""==t.tHead1[t.tHead1.length-1].name?e("td",{style:{width:t.tHead1[t.tHead1.length-1].width}},[e("a",{staticStyle:{color:"#409eff"}},[t._v("删除")])]):t._e()]),t._v(" "),t._m(2),t._v(" "),e("div",{attrs:{id:"fixeds"}},[e("s-table",{attrs:{id:"fixeds",list:t.list,tHead:t.tHead1,border:"",fixed:"",height:"150px"}},[""==t.tHead1[t.tHead1.length-1].name?e("td",{style:{width:t.tHead1[t.tHead1.length-1].width}},[e("a",{staticStyle:{color:"#409eff"}},[t._v("详情")])]):t._e()])],1),t._v(" "),e("p",{staticClass:" f30 mb20 mt20 clr"},[t._v("2.文档示例")]),t._v(" "),e("div",{staticClass:"markdown-body"},[e("doc")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"mb10"},[s("strong",[this._v("表格1普通样式")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"mb10"},[s("strong",[this._v("表格2有Border  有操作")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"mb10"},[s("strong",[this._v("表格3固定头部 有操作  可居中 居左 居右")])])}]};var l=e("VU/8")(n,r,!1,function(t){e("7MlI")},"data-v-4dd648c9",null);s.default=l.exports},Z1CH:function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.iconList[data-v-4dd648c9]{\r\n    border-top:1px solid  #eeeeee;\r\n    border-left:1px solid  #eeeeee;\r\n    overflow: hidden;\n}\n.iconList div[data-v-4dd648c9]{\r\n    padding-top:20px;\r\n    width:151px;\r\n    height:120px;\r\n    text-align:center;\r\n     border-right:1px solid  #eeeeee;\r\n    border-bottom:1px solid  #eeeeee;\r\n    cursor: pointer;\n}\n.iconList div[data-v-4dd648c9]:hover{\r\n    color:#008dff\n}\r\n",""])},tgzO:function(t,s,e){t.exports=e("1hau")}});