This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

## 常用命令  

```bash
$ npm update -g cordova ionic
$ ionic serve
$ npm run build // 生成www文件夹
$ ionic g component my-component
$ ionic g page my-page  
$ ionic g provider my-service
$ ionic cordova emulate android
$ ionic cordova run android --prod --release
$ ionic cordova build android --prod --release
$ cordova plugin add cordova-plugin-crosswalk-webview
$ cordova plugin remove cordova-plugin-crosswalk-webview
```

## npm国内镜像

```bash
$ npm config set registry https://registry.npm.taobao.org 
$ npm info underscore
```

## pdf在线预览

```bash
$ npm install pdfjs-dist --save
$ npm install ng2-pdf-viewer --save   // pdf在线预览
$ npm install --save ionic2-rating    // 打分控件
```

## 国际化支持`i18n`

[ngx-translate](https://github.com/ngx-translate/core)

## 页面导航

ionic2 deeplinker页面跳转只能够传递number、string类型，传递url一定要转码。  

- http://localhost:8100/#/video/d64cd5a5-e3f3-4b76-93d6-f10f113cdb59/http%3a%2f%2f9890.vod.myqcloud.com%2f9890_4e292f9a3dd011e6b4078980237cc3d3.f20.mp4
- http://localhost:8100/#/preview/d64cd5a5-e3f3-4b76-93d6-f10f113cdb59/https%3a%2f%2fvadimdez.github.io%2fng2-pdf-viewer%2fpdf-test.pdf
- https://aorise-org.github.io/products/ionic-education/#/video/1
- https://aorise-org.github.io/products/ionic-education/#/preview/2


### 测试地址

- http://9890.vod.myqcloud.com/9890_4e292f9a3dd011e6b4078980237cc3d3.f20.mp4
- https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf

### http代理 

在 `ionic.config.json` 添加
```bash
  "proxies": [
    {
      "path": "/takeaway",
      "proxyUrl": "https://aorise-org.github.io/takeaway"
    }
  ]
```
