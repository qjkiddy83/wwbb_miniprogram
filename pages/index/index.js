//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  submit: function (event) {
    // console.log(event,this)
    wx.showToast({
      title: 'aaaa',
    })
    wx.request({
      url: 'https://node.jsers.cn/wwbb/send?openid=' + this.data.openid + '&formid=' + event.detail.formId,
      success: data => {
        console.log(data)
      }
    })
  },
  onLoad: function () {
    if (app.globalData.openid) {
      this.setData({
        openid: app.globalData.openid
      })
    } else {
      app.logincallback = res => {
        this.setData({
          openid: res.openid
        })
      }
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.login({
      success: function (e) {
        console.log(e)
      }
    })
  }
})
