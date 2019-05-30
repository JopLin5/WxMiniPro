//prototype构建数据操作类
// var DBPost = function() {
//   this.storageKeyName = 'postList'; //所有的文章本地缓存存储键值
// }
// DBPost.prototype = {
//   //得到全部文章
//   getAllPostData: function() {
//     var res = wx.getStorageSync(this.storageKeyName);
//     if (!res) {
//       res = requir('../data/data.js').postList;
//       this.execSetStorageSync(res);
//     }
//     return res;
//   },
//   //本地缓存  保存/更新
//   execSetStorageSync:function(data){
//     wx.setStorageSync('this.storageKeyName', data)
//   }
// }
// //向外部暴露模块接口
// module.exports = {
//   DBPost: DBPost
// }


//使用ES6改写缓存操作类
class DBPost {
  constructor(postId) {
    this.storageKeyName = 'postList';
    this.postId = postId;
  }
  //得到全部文章
  getAllPostData() {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      res = requir('../data/data.js').postList;
      this.execSetStorageSync(res);
    }
    return res;
  }
  //本地缓存  保存/更新
  execSetStorageSync(data) {
    wx.setStorageSync('this.storageKeyName', data)
  }

  //获取指定id号的文章数据
  getPostItemById() {
    var postsData = this.getAllPostData();
    var len = postsData.length;
    for (var i = 0; i < len; i++) {
      if (postsData[i].postId == this.postId) {
        return {
          //当前文章在缓存数组中的序号
          index: i,
          data: postsData[i]
        }
      }
    }
  }


};






//向外部暴露模块接口
export {
  DBPost
}