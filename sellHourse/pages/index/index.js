//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {

  },

  //自定义事件
  mai_house:function(){
    wx.navigateTo({
      url: '../maiHourse/maiHourse',
    })
  }, 
  zu_house: function () {
    wx.navigateTo({
      url: '../zuHourse/zuHourse',
    })
  }, 
  pinGu_house:function(){
    wx.navigateTo({
      url: '../pinGu_house/pinGu_house',
    })
  },
  search_house: function () {
    wx.showToast({
      title: '搜索功能暂未开放！',
      icon: "none"
    })
    setTimeout(function () {
      wx.hideLoading();
    },1000)
  }
})
