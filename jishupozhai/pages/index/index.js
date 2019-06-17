Page({
  data: {
    imgUrls: [
      'https://dwz.cn/YyOMc9xg',
      'https://dwz.cn/tdhZkPKx',
      'https://dwz.cn/5WOLBPmh',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,

    prolist: [{
        logo: 'https://dwz.cn/YyOMc9xg',
        title: '【网盘】PanDownload下载器',
        desc: '解除百度云限速功能，能为用户提供不限速下载功能。',
      },
      {
        logo: 'https://dwz.cn/tdhZkPKx',
        title: '【实用】日期倒计时桌面插件',
        desc: '一款日期倒计时插件，可用于添加桌面小窗口，对一些重要事件（如朋友生日、发工资日期等）进行倒计时显示',
      },
      {
        logo: 'https://dwz.cn/5WOLBPmh',
        title: '【QQ】空间加速神器、访问、点赞、留言......',
        desc: '空间便利访问，空间说说队形，空间留言，各种QQ空间便利。',
      },
      {
        logo: 'https://dwz.cn/H4XXvsBb',
        title: '【实用】卓凡暴力应用转移',
        desc: 'ROOT用户专用，将更多的应用程序转移到SD卡，秒杀同类应用转移产品！',
      },
      {
        logo: 'https://dwz.cn/XXQ7GWr2',
        title: '【头像】姓氏/学霸公式/个性头像生成器',
        desc: '一键生成头像，更换背景，酷炫,还有背景音乐 ，可制作个性炫酷头像',
      },
      {
        logo: 'https://dwz.cn/tdhZkPKx',
        title: '【实用】日期倒计时桌面插件',
        desc: '一款日期倒计时插件，可用于添加桌面小窗口，对一些重要事件（如朋友生日、发工资日期等）进行倒计时显示',
      },
      {
        logo: 'https://dwz.cn/5WOLBPmh',
        title: '【QQ】空间加速神器、访问、点赞、留言......',
        desc: '空间便利访问，空间说说队形，空间留言，各种QQ空间便利。',
      },
      {
        logo: 'https://dwz.cn/H4XXvsBb',
        title: '【实用】卓凡暴力应用转移',
        desc: 'ROOT用户专用，将更多的应用程序转移到SD卡，秒杀同类应用转移产品！',
      },
      {
        logo: 'https://dwz.cn/XXQ7GWr2',
        title: '【头像】姓氏/学霸公式/个性头像生成器',
        desc: '一键生成头像，更换背景，酷炫,还有背景音乐 ，可制作个性炫酷头像',
      },
      {
        logo: 'https://dwz.cn/aTOUqn2c',
        title: '001期-030期合集--技术坡宅',
        desc: '长按链接--复制--打开--输入提取码 ：即可获取软件--点普通下载--可以直接安装',
      },
    ]
  },
  onLoad: function() {
    this.setDate({
      text: "01",
    })
  },
  toDetail: function(e) {
    console.log(e);
    var index = e.currentTarget.dateset.index;
    console.log(index);
  }
})