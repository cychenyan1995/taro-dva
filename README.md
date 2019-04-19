# 技术栈

React + Taro + Dva + Sass + ES6/ES7

# 涉及内容
## 小程序组件部分
地图的简单使用
markers标记

## scss部分
### 首页的GoodList组件
flex
    1)使用ul和li来排列图片
    一行2张图片平分位置
    设置父级为flex
    每个li 设置为border-box 宽度为50%

    2)图片下面的三个说明（VIP 价格）
    使用flex来调整
    justify-content: flex-start;

单位：
1vh 1%的视窗高度
1vm 1%的视宽度


##### https://segmentfault.com/a/1190000016676867
##### https://www.jianshu.com/p/6fbe80bc2ab1

##### 多端适配
    小程序 h5 react-native 
    
    安装
    npm install -g @tarojs/cli
    
    创建项目
    taro init taro-demo
    
    cnpm i 
    启动小程序
    cnpm run dev:weapp
    

##### taro-ui
    cnpm i taro-ui --save-dev
    
    需要引入全局样式 在app.scss中
    @import "~taro-ui/dist/style/index.scss";
    
##### ts
    报错taro typeScript does not exist on type 'Readonly<{}>'.
    
    要定义接口
    
##### 小程序开发设置
    https://mp.weixin.qq.com/
    登录：
    1593225054@qq.com
    13163293375cy
    
    配置request域（后台接口）
    
##### Taro的生命周期函数
######    Taro本身的生命周期
    1）componentWillMount()
    相当于页面的onLoad或入口文件app中的onLaunch
    2）componentDidMount()
    相当于页面的onReady()或入口文件app中的onLaunch
    3）componentDidShow()
    对应于onShow()
    4）componentDidHide()
    onHide()
    5）componentWillUpdate
    6）componentDidUpdate
    7）componentWillUnmount
    onUnload()
    
###### 小程序中特有的生命周期方法
    1）onPullDownRefresh()
    监听页面的下拉操作
    2）onReachBottom()
    触底事件函数 (用于分页刷新页面)
    3）onShareAppMessage()
    用户点击右上角的转发
    4）onPageScroll()
    页面滚动时间的处理函数
    5）onTabItemTap
    当前是tab页面，点击tab时触发
    6）componentWillPreload预加载
    
##### 项目记点
###### 登录
    1）Taro.request()
    2）登录成功后，保存用户信息
    Taro.setStorage()
###### ![image](https://note.youdao.com/yws/public/resource/7ddad0c17c27f7873ef50d6fdb8a6728/xmlnote/DDFF045F925E4AFABC763B0D07663AAF/22893)

###### ![image](https://note.youdao.com/yws/public/resource/7ddad0c17c27f7873ef50d6fdb8a6728/xmlnote/B9B414C987EA42EE973DB9EB4B32C0E4/22898)

###### ![image](https://note.youdao.com/yws/public/resource/7ddad0c17c27f7873ef50d6fdb8a6728/xmlnote/CD56C30EF3704F55A964C8BB89911453/22900)

###### ![image](https://note.youdao.com/yws/public/resource/7ddad0c17c27f7873ef50d6fdb8a6728/xmlnote/194B935F48CD470F9D2581B3BE645D78/22977)


##### h5
    dev.js
    中排除h5: 
    {
        esnextModules: ['taro-ui'],
     }
     
    启动：cnpm run dev:h5
    

#####     taro+dva
    1.安装dva
    dva-core dva-loading
    dva-core:封装了redux和redux-saga
    
    数据请求大致流程
    home/config.ts中配置接口路径
    config/requestConfig.ts中引入
    utils/request.ts中合并
    
 
##### 知识点集锦
    1）小程序Image标签的mode属性
    设置为widthFix时表示宽度不变，高度自动变化，保持原图宽高比不变
##### 错误集锦
    1）页面文件的后缀是tsx
    
##### 待看
    开发-》开发者工具-》位置服务

