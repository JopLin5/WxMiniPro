//app.js
App({
  onLaunch: function() {
    // 优化缓存初始化判断
    var storageData = wx.getStorageSync('postList');
    if (!storageData) {
      //如果postList缓存不存在
      var dataObj = require("data/data.js")
      wx.clearStorageSync();
      wx.setStorageSync('postList', dataObj.postList)
    }

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
  //   wx.getSetting({
  //     success: res => {
  //       if (res.authSetting['scope.userInfo']) {
  //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
  //         wx.getUserInfo({
  //           success: res => {
  //             // 可以将 res 发送给后台解码出 unionId
  //             this.globalData.userInfo = res.userInfo

  //             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //             // 所以此处加入 callback 以防止这种情况
  //             if (this.userInfoReadyCallback) {
  //               this.userInfoReadyCallback(res)
  //             }
  //           }
  //         })
  //       }
  //     }
  //   })
  },
  globalData: {
    g_userInfo: null
  },

  _getUserInfo: function() {
    var userInfoStorage = wx.getStorageSync('user');
    if (!userInfoStorage) {
      //如果缓存中没有用户信息，那么获取用户信息
      var that = this;
      wx.login({
        success: function() {
          wx.getUserInfo({
            success: function(res) {
              that.globalData.userInfo = res.userInfo
              //将用户的基本信息把存到缓存中
              wx.setStorageSync('user', c)
							console.log("geUserinfo",_______)
            },
            fail: function(res) {
              console.log(res);
            }
          })
        }
      })
    } else {
      //如果缓存中已经存在用户基本信息，那么将信息保存到全局变量中
      this.globalData.userInfo = userInfoStorage
    }
  }


	
})