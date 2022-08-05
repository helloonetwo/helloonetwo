(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{822:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"规范化标准"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规范化标准"}},[s._v("#")]),s._v(" 规范化标准")]),s._v(" "),a("blockquote",[a("p",[s._v("规范化是我们践行前端工程化中重要的一部分\n为什么要有规范会标准？")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("软件开发需要多人协同")])]),s._v(" "),a("li",[a("p",[s._v("不同开发者具有不同的编码习惯和喜好")])]),s._v(" "),a("li",[a("p",[s._v("不同的喜好会增加项目的维护成本")])]),s._v(" "),a("li",[a("p",[s._v("每个项目或者团队需要明确统一的标准\n哪里需要规范化标准？")])]),s._v(" "),a("li",[a("p",[s._v("代码、文档、甚至是提交日志")])]),s._v(" "),a("li",[a("p",[s._v("开发过程中人为编写的成果物")])]),s._v(" "),a("li",[a("p",[s._v("代码标准化规范最为重要")])])]),s._v(" "),a("p",[s._v("实施规范化的方法：")]),s._v(" "),a("ul",[a("li",[s._v("编码前人为的标准约定 通过工具实现 Lint")])]),s._v(" "),a("p",[s._v("常见的规范化实现方式：")]),s._v(" "),a("ul",[a("li",[s._v("ESLint 工具使用")]),s._v(" "),a("li",[s._v("定制 ESLint 校验规则")]),s._v(" "),a("li",[s._v("ESLint 对 TypeScript 的支持")]),s._v(" "),a("li",[s._v("0ESLint 结合自动化工具或者 Webpack")]),s._v(" "),a("li",[s._v("基于 ESLint 的衍生工具")]),s._v(" "),a("li",[s._v("StyleLint 工具的使用")])]),s._v(" "),a("h3",{attrs:{id:"eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[s._v("#")]),s._v(" ESLint")]),s._v(" "),a("h4",{attrs:{id:"eslint-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-介绍"}},[s._v("#")]),s._v(" ESLint 介绍")]),s._v(" "),a("p",[s._v("最为主流的 JavaScript Lint 工具，检测 JS 代码质量\nESLint 很容易统一开发者的编码风格\nESLint 可以帮助开发者提升编码能力")]),s._v(" "),a("h4",{attrs:{id:"eslint-快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-快速上手"}},[s._v("#")]),s._v(" ESLint 快速上手")]),s._v(" "),a("p",[s._v("ESLint 安装步骤：")]),s._v(" "),a("p",[s._v("1.初始化项目")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("npm init "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("yes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2.安装 ESLint 模块为开发依赖")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("npm install eslint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3.通过 CLI 命令验证安装结果")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("npx eslint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("ESLint 检查步骤：")]),s._v(" "),a("ul",[a("li",[s._v("初始化配置文件npx eslint --init")]),s._v(" "),a("li",[s._v("编写“问题”代码，使用 eslint 执行检测 npx eslint ./01-prepare.js ，加上参数 --fix 可以自动修复格式问题")]),s._v(" "),a("li",[s._v("当代码中存在语法错误时，eslint 没法检查问题代码")])]),s._v(" "),a("h4",{attrs:{id:"eslint-配置文件解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-配置文件解析"}},[s._v("#")]),s._v(" ESLint 配置文件解析")]),s._v(" "),a("p",[s._v("// .eslintrc.js")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 标记当前代码最终的运行环境")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("browser")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码运行在浏览器环境")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("es2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录共享配置")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'standard'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果需要在多个项目共享一个eslin配置，可以定义一个公共配置文件并在此集成")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("parserOptions")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置语法解析器的相关配置 控制是否允许使用某一个ES版本的语法")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("ecmaVersion")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置eslint中每一个校验规则的开启/关闭")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'no-alert'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 内置规则名称： off/warn/error")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("global")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 额外声明代码中可使用全局成员 最新版本默认配置已不再体现")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 例如要使用jQuery对象")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"jQuery"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readonly"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("env 环境示例：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/js24.png",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"eslint-配置注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-配置注释"}},[s._v("#")]),s._v(" ESLint 配置注释")]),s._v(" "),a("ul",[a("li",[s._v("将配置通过注释的方式写在脚本文件中，再去执行代码校验")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用注释临时禁用指定规则")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${name} is a coder"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eslint-disable-line no-template-curly-in-string ")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("注释的方式不仅可以禁用某个规则，还可以：")]),s._v(" "),a("ul",[a("li",[s._v("声明全局变量")]),s._v(" "),a("li",[s._v("修改某个规则的配置")]),s._v(" "),a("li",[s._v("临时开启某个环境\n如有需要，可以通过这个链接，找到对应文档使用。")])]),s._v(" "),a("h4",{attrs:{id:"eslint-结合自动化工具-gulp-eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-结合自动化工具-gulp-eslint"}},[s._v("#")]),s._v(" ESLint 结合自动化工具（gulp-eslint）")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("集成之后，ESLint 一定会工作")])]),s._v(" "),a("li",[a("p",[s._v("与项目统一，管理更加方便\n前置工作：")])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/zce/zce-gulp-demo",target:"_blank",rel:"noopener noreferrer"}},[s._v("项目代码"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("完成相应的依赖安装")])]),s._v(" "),a("li",[a("p",[s._v("安成 eslint 模块安装")])]),s._v(" "),a("li",[a("p",[s._v("完成 gulp-eslint 模块安装")])]),s._v(" "),a("li",[a("p",[s._v("初始化 .eslintrc.js 配置文件\n结合 gulp 使用，通过 .pipe(plugins.eslint()) .pipe(plugins.eslint.format()) .pipe(plugins.eslint.failAfterError()) 让其工作")])])]),s._v(" "),a("h4",{attrs:{id:"eslint-结合-webpack-eslint-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-结合-webpack-eslint-loader"}},[s._v("#")]),s._v(" ESLint 结合 Webpack（eslint-loader）")]),s._v(" "),a("ol",[a("li",[s._v("Webpack 可以通过 loader 机制实现 eslint 的检测工作\n前置工作：")])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/zce/zce-react-app",target:"_blank",rel:"noopener noreferrer"}},[s._v("项目代码"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("完成相应的依赖安装")]),s._v(" "),a("li",[s._v("安成 eslint 模块安装")]),s._v(" "),a("li",[s._v("完成 eslint-loader 模块安装")]),s._v(" "),a("li",[s._v("初始化 .eslintrc.js 配置文件")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("在 webpack.config.js 文件配置 eslint-loader 应用在 .js 文件中")]),s._v(" "),a("li",[s._v("安装相关插件，如：eslint-plugin-react")]),s._v(" "),a("li",[s._v("修改 .eslintrc.js 的配置")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .eslintrc.js")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'react/jsx-uses-react'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以数字2代替")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'react/jsx-uses-vars'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("也可以使用共享配置recomended降低使用成本")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .eslintrc.js")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'plugin: react/recomended'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// plugin：插件名称/配置名字")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'react/jsx-uses-react': \"error\"")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'react/jsx-uses-vars': \"error\"")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'react'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h4",{attrs:{id:"eslint-检查-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-检查-typescript"}},[s._v("#")]),s._v(" ESLint 检查 TypeScript")]),s._v(" "),a("ul",[a("li",[s._v("初始化项目")]),s._v(" "),a("li",[s._v("安装 eslint typescript")]),s._v(" "),a("li",[s._v("初始化 .eslintrc.js 配置文件，注意当询问 use TypeScript ? 是要选择 yes")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .eslintrc.js")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("parser")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@typescript-selint/parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定一个语法解析器")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("执行 npx eslint .\\index.ts")])]),s._v(" "),a("h3",{attrs:{id:"stylelint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylelint"}},[s._v("#")]),s._v(" Stylelint")]),s._v(" "),a("h4",{attrs:{id:"stylelint-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylelint-介绍"}},[s._v("#")]),s._v(" Stylelint 介绍")]),s._v(" "),a("ul",[a("li",[s._v("提供默认的代码检查规则")]),s._v(" "),a("li",[s._v("提供 CLI 工具，快速调用")]),s._v(" "),a("li",[s._v("通过插件支持 Sass Less PostCSS")]),s._v(" "),a("li",[s._v("支持 Gulp 或 Webpack 集成")])]),s._v(" "),a("h4",{attrs:{id:"stylelint-快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylelint-快速上手"}},[s._v("#")]),s._v(" Stylelint 快速上手")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("安装 stylelint npm i stylelint -D")])]),s._v(" "),a("li",[a("p",[s._v("安装 standard 插件 npm i stylelint-config-standard -D")])]),s._v(" "),a("li",[a("p",[s._v("创建 .stylelintrc.js 配置文件，并修改 extends 字段")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .stylelintrc.js")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'stylelint-config-standard'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("执行 npx stylelint ./index.css，加上参数 --fix 可以自动修复部分格式问题")])]),s._v(" "),a("li",[a("p",[s._v("检查 sass 文件，执行 npm i stylelint-config-sass-guidelines -D，修改 .stylelintrc.js 文件中的 extends 为数组，添加 sass 插件")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .stylelintrc.js")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'stylelint-config-standard'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'stylelint-config-sass-guidelines'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"prettier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prettier"}},[s._v("#")]),s._v(" Prettier")]),s._v(" "),a("h4",{attrs:{id:"prettier-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prettier-介绍"}},[s._v("#")]),s._v(" Prettier 介绍")]),s._v(" "),a("p",[s._v("Prettier 几乎可以完成所有类型文件的格式化工作")]),s._v(" "),a("h4",{attrs:{id:"prettier-快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prettier-快速上手"}},[s._v("#")]),s._v(" Prettier 快速上手")]),s._v(" "),a("ul",[a("li",[s._v("安装， npm i prettier -D")]),s._v(" "),a("li",[s._v("检查某个文件并输出检查结果，npx prettier style.css")]),s._v(" "),a("li",[s._v("检查并格式化某个文件，npx prettier style.css --write")]),s._v(" "),a("li",[s._v("检查并格式化项目所有文件，npx prettier . --write")])]),s._v(" "),a("h3",{attrs:{id:"eslint-结合-git-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-结合-git-hooks"}},[s._v("#")]),s._v(" ESLint 结合 Git Hooks")]),s._v(" "),a("h4",{attrs:{id:"git-hooks-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-hooks-介绍"}},[s._v("#")]),s._v(" Git Hooks 介绍")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("代码提交至仓库之前未执行 lint 工作")])]),s._v(" "),a("li",[a("p",[s._v("使用 lint 的目的就是保证提交到仓库的代码是没有问题的")])]),s._v(" "),a("li",[a("p",[s._v("通过 Git Hooks 在代码提交前强制 lint")])]),s._v(" "),a("li",[a("p",[s._v("Git Hook 也称之为 git 钩子，每个钩子都对应一个任务")])]),s._v(" "),a("li",[a("p",[s._v("通过 shell 脚本可以编写钩子任务触发时要具体执行的操作")])])]),s._v(" "),a("h4",{attrs:{id:"git-hooks-快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-hooks-快速上手"}},[s._v("#")]),s._v(" Git Hooks 快速上手")]),s._v(" "),a("p",[s._v("希望通过 Git Hooks 钩子在代码提交前强制实现对代码的 lint 操作\n很多前端开发者并不擅长使用 shell\nHusky 可以实现 Git Hooks 的使用需求 npm i husky -D，然后在 package.json 中添加如下配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslint ./index.js"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run lint"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("配合 lint-stage 使用，npm i lint-staged -D")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslint ./index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"precommit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lint-staged"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run precommit"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"*.js*"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);