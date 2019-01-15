webpackJsonp([69],{1662:function(s,a,t){s.exports=t(3726)},3726:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t(3727),r=t(58),n=r(null,e.a,!1,null,null,null);a.default=n.exports},3727:function(s,a,t){"use strict";var e=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},r=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("h1",[s._v("定制主题")]),s._v(" "),t("p",[s._v("ant-design-vue的组件结构及样式和Antd React完全一致，你可以参考Antd React的定制方式进行配置。")]),s._v(" "),t("p",[s._v("Ant Design 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"Ant-Design-Vue-的样式变量"}},[s._v("Ant Design Vue 的样式变量 "),t("a",{staticClass:"anchor",attrs:{href:"#Ant-Design-Vue-的样式变量","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("antd 的样式使用了 "),t("a",{attrs:{href:"http://lesscss.org/"}},[s._v("Less")]),s._v(" 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。")]),s._v(" "),t("p",[s._v("以下是一些最常用的通用变量，所有样式变量可以在 "),t("a",{attrs:{href:"https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less"}},[s._v("这里")]),s._v(" 找到。")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-less"}},[t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@primary-color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#1890ff")]),s._v(";                         "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 全局主色")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@link-color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#1890ff")]),s._v(";                            "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 链接色")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@success-color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#52c41a")]),s._v(";                         "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 成功色")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@warning-color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#faad14")]),s._v(";                         "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 警告色")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@error-color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#f5222d")]),s._v(";                           "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 错误色")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@font-size-base")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("14px")]),s._v(";                           "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 主字号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@heading-color")]),s._v(": rgba("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", ."),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85")]),s._v(");              "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 标题色")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@text-color")]),s._v(": rgba("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", ."),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("65")]),s._v(");                 "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 主文本色")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@text-color-secondary ")]),s._v(": rgba("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", ."),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v(");      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 次文本色")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@disabled-color ")]),s._v(": rgba("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", ."),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(");            "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 失效色")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@border-radius-base")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4px")]),s._v(";                        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 组件/浮层圆角")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@border-color-base")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#d9d9d9")]),s._v(";                     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 边框色")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@box-shadow-base")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2px")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8px")]),s._v(" rgba("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", ."),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(");  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 浮层阴影")]),s._v("\n")])]),s._v(" "),t("p",[s._v("如果以上变量不能满足你的定制需求，可以给我们提 issue。")]),s._v(" "),t("h2",{attrs:{id:"定制方式"}},[s._v("定制方式 "),t("a",{staticClass:"anchor",attrs:{href:"#定制方式","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("我们使用 "),t("a",{attrs:{href:"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"}},[s._v("modifyVars")]),s._v(" 的方式来进行覆盖变量。"),t("br"),s._v("\n下面将针对不同的场景提供一些常用的定制方式。"),t("br")]),s._v(" "),t("h3",{attrs:{id:"在-webpack-中定制主题"}},[s._v("在 webpack 中定制主题 "),t("a",{staticClass:"anchor",attrs:{href:"#在-webpack-中定制主题","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("我们以 webpack@4 为例进行说明，以下是一个 "),t("code",{pre:!0},[s._v("webpack.config.js")]),s._v(" 的典型例子，对 "),t("a",{attrs:{href:"https://github.com/webpack-contrib/less-loader"}},[s._v("less-loader")]),s._v(" 的 options 属性进行相应配置。")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-diff"}},[s._v("// webpack.config.js\nmodule.exports = {\n  rules: [{\n    test: /\\.less$/,\n    use: [{\n      loader: 'style-loader',\n    }, {\n      loader: 'css-loader', // translates CSS into CommonJS\n    }, {\n      loader: 'less-loader', // compiles Less to CSS\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+     options: {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+       modifyVars: {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+         'primary-color': '#1DA57A',")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+         'link-color': '#1DA57A',")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+         'border-radius-base': '2px',")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+       },")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+       javascriptEnabled: true,")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+     },")]),s._v("\n    }],\n    // ...other rules\n  }],\n  // ...other config\n}\n")])]),s._v(" "),t("p",[s._v("注意 less-loader 的处理范围不要过滤掉 "),t("code",{pre:!0},[s._v("node_modules")]),s._v(" 下的 antd 包。")]),s._v(" "),t("h3",{attrs:{id:"在-vue-cli-2中定制主题"}},[s._v("在 vue cli 2中定制主题 "),t("a",{staticClass:"anchor",attrs:{href:"#在-vue-cli-2中定制主题","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("修改"),t("code",{pre:!0},[s._v("build/utils.js")]),s._v("文件")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-diff"}},[s._v("// build/utils.js\n"),t("span",{pre:!0,attrs:{class:"hljs-deletion"}},[s._v("- less: generateLoaders('less'),")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+ less: generateLoaders('less', {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+   modifyVars: {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+     'primary-color': '#1DA57A',")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+     'link-color': '#1DA57A',")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+     'border-radius-base': '2px',")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+   },")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+   javascriptEnabled: true,")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-addition"}},[s._v("+ }),")]),s._v("\n\n")])]),s._v(" "),t("h3",{attrs:{id:"在-vue-cli-3中定制主题"}},[s._v("在 vue cli 3中定制主题 "),t("a",{staticClass:"anchor",attrs:{href:"#在-vue-cli-3中定制主题","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("项目更目录下新建文件"),t("code",{pre:!0},[s._v("vue.config.js")])]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[s._v("// vue.config.js\nmodule.exports = {\n  css: {\n    loaderOptions: {\n      less: {\n        modifyVars: {\n          'primary-color': '#1DA57A',\n          'link-color': '#1DA57A',\n          'border-radius-base': '2px',\n        },\n        javascriptEnabled: true\n      }\n    }\n  }\n}\n")])]),s._v(" "),t("h3",{attrs:{id:"配置-less-变量文件"}},[s._v("配置 less 变量文件 "),t("a",{staticClass:"anchor",attrs:{href:"#配置-less-变量文件","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("另外一种方式是建立一个单独的 "),t("code",{pre:!0},[s._v("less")]),s._v(" 变量文件，引入这个文件覆盖 "),t("code",{pre:!0},[s._v("antd.less")]),s._v(" 里的变量。")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-css"}},[s._v("__"),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("at__import")]),s._v(' "~'),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("ant-design-vue")]),s._v("/"),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("dist")]),s._v("/"),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("antd")]),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".less")]),s._v('";   // 引入官方提供的 '),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("less")]),s._v(" 样式入口文件\n__"),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("at__import")]),s._v(' "'),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("your-theme-file")]),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".less")]),s._v('";   // 用于覆盖上面定义的变量\n')])]),s._v(" "),t("p",[s._v("注意，这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 "),t("code",{pre:!0},[s._v("babel-plugin-import")]),s._v(" 的 "),t("code",{pre:!0},[s._v("style")]),s._v(" 属性一起使用。")]),s._v(" "),t("h2",{attrs:{id:"没有生效？"}},[s._v("没有生效？ "),t("a",{staticClass:"anchor",attrs:{href:"#没有生效？","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("注意样式必须加载 less 格式，一个常见的问题就是引入了多份样式，less 的样式被 css 的样式覆盖了。")]),s._v(" "),t("ul",[t("li",[s._v("如果你在使用 "),t("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import"}},[s._v("babel-plugin-import")]),s._v(" 的 "),t("code",{pre:!0},[s._v("style")]),s._v(" 配置来引入样式，需要将配置值从 "),t("code",{pre:!0},[s._v("'css'")]),s._v(" 改为 "),t("code",{pre:!0},[s._v("true")]),s._v("，这样会引入 less 文件。")]),s._v(" "),t("li",[s._v("如果你是通过 "),t("code",{pre:!0},[s._v("'ant-design-vue/dist/antd.css'")]),s._v(" 引入样式的，改为 "),t("code",{pre:!0},[s._v("ant-design-vue/dist/antd.less")]),s._v("。")])]),s._v(" "),t("h2",{attrs:{id:"社区教程-for-Antd-React"}},[s._v("社区教程 for Antd React "),t("a",{staticClass:"anchor",attrs:{href:"#社区教程-for-Antd-React","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f"}},[s._v("How to Customize Ant Design with React & Webpack… the Missing Guide")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7"}},[s._v("Theming Ant Design with Sass and Webpack")])])])])}],n={render:e,staticRenderFns:r};a.a=n}});