### 慕课网React+TypeScript仿写Antd组件库学习记录

### 10.06提交
1. 完善文件结构和代码规范
    - 1.1 新建src/components组件文件夹、src/styles公共样式文件夹
    - 1.2 如果使用vsCode进行开发，而且使用了ESLint的话，需要修改TS语法支持的后缀，添加typescriptreact的一些处理，这样才会自动修复一些ESLint的规则。于是新增.vscode/settings.json，并添加以下代码
    ```
    {
        "eslint.validate": [
            "javascript",
            "javascriptreact",
            {
            "language": "typescript",
            "autoFix": true
            },
            {
            "language": "typescriptreact",
            "autoFix": true
            }
        ]
        }
    ```
2. 新增src/styles文件夹，并新增以下文件
    - 2.1 _variables.scss文件，添加公共样式变量
    - 2.2 _reboot.scss文件，添加normalize.css(优化各浏览器更好显示)
    - 2.3 index.scss文件

### 10.07提交
1. 引入classnames库`npm install classnames --save`、`npm install @types/classnames --save`,作用是动态添加多个className
2. 新增components/Button按钮组件
    - 2.1 button组件增加单元测试button.test.tsx，测试框架使用的是react-testing-library，新版create-react-app已经自带，无需下载
3. 新增styles/_mixins.scss全局mixins

### 10.08提交
1. 新增components/Menu菜单组件

### 截止10/7项目结构
```
│  .gitignore  
│  package.json  
│  README.md  
│  tsconfig.json  
│  yarn.lock  
│    
├─.vscode  
│      settings.json  
│                
├─public  
│      favicon.ico  
│      index.html  
│      logo192.png  
│      logo512.png  
│      manifest.json  
│      robots.txt  
│        
└─src  
    │  App.css  
    │  App.test.tsx  
    │  App.tsx  
    │  index.css  
    │  index.tsx  
    │  logo.svg  
    │  react-app-env.d.ts  
    │  serviceWorker.ts  
    │  setupTests.ts  
    │  
    ├─components  
    |          | Button  按钮组件
    |          | Menu    菜单组件
    └─styles    
           │ _functions.scss 全局functions  
           │ _mixins.scss    全局mixins  
           | _reboot.scss    normalize.css
           │ _variables.scss 各种变量以及可配置设置  
           | index.scss      全局样式入口
```