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
    wx.setStorageSync(this.storageKeyName, data)
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


  //收藏文章
  collect() {
    return this.updatePostData('collect');
  }
  //点赞或者取消点赞
  up() {
    var data = this.updatePostData('up');
    return data;
  }

  //更新本地的点赞、评论信息、收藏、阅读量
  updatePostData(category) {
    var itemData = this.getPostItemById(),
      postData = itemData.data,
      allPostData = this.getAllPostData();
    switch (category) {
      case 'collect':
        //处理收藏
        if (!postData.collectionStatus) {
          //如果当前状态是未收藏
          postData.collectionNum++;
          postData.collectionStatus = true;
          console.log('收藏')
        } else {
          // 如果当前状态是收藏
          postData.collectionNum--;
          postData.collectionStatus = false;
          console.log('取消收藏')
        }
        break;

      case 'up':
        if (!postData.upStatus) {
          postData.upNum++;
          postData.upStatus = true;
        }else{
          postData.upNum--;
          postData.upStatus = false;
        }
        break;
        
      default:
        break;
    }
    //更新缓存数据库
    allPostData[itemData.index] = postData;
    this.execSetStorageSync(allPostData);
    return postData;
  }









};






//向外部暴露模块接口
export {
  DBPost
}