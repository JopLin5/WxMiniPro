// pages/post/post.js

//引入模块data.js
var dataObj = require("../../data/data.js");      //只可使用相对路径../../
// var DBPost = require("../../db/DBPost.js").DBPost;    //prototype构建数据操作类
import { DBPost } from '../../db/DBPost.js';        //使用ES6改写缓存操作类

//获取应用实例
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var dbPost = new DBPost();   //实例化对象
    this.setData({
      postList: dbPost.getAllPostData()
    })
  },

  onTapToDetail:function(event){
    var postId = event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+postId,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})