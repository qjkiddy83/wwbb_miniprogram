//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // console.log(res)
        wx.request({
          url: 'https://node.jsers.cn/wwbb/login?code='+res.code,
          success:data=>{
            //console.log(data)
            this.globalData.openid = data.data.openid
            if(this.logincallback){
              this.logincallback(data.data)
            }
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})