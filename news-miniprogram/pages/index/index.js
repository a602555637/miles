let typeSelected = 0;

Page({

  data: {
    result: [],
    date: '',
    title: '',
    firstImage: '',
    source: '',
    id: '',
    //menu
    menuItem: [
      { text: "推荐", list: "ty", index: 0, select: 'selected' },
      { text: "国内", list: "gn", index: 1, select: '' },
      { text: "国际", list: "gj", index: 2, select: '' },
      { text: "财经", list: "cj", index: 3, select: '' },
      { text: "娱乐", list: "yl", index: 4, select: '' },
      { text: "军事", list: "js", index: 5, select: '' },
      { text: "其他", list: "other", index: 6, select: '' }
    ],
  },
  // 详情页跳转
  onDetailTap:function(event){
    var newsid = event.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + newsid
    })
  },

  onLoad(){
    this.getNow(typeSelected)
  },
  //获取网络数据
  getNow(typeIndex, callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        'type': this.data.menuItem[typeIndex].list
      },
      success: res => {
        let result = res.data.result;
        this.setDate(result);
        console.log(result);
        this.setData({
          result: result
        });
      },
      fail: res => {
        wx.showToast({
          icon: "none",
          title: 'code:404'
        })
      },
      complete: () => {
        callback && callback()
      }
    })
  },

  setDate(result) {
    for (var i = 0; i < result.length; i++) {
      result[i].date = result[i].date.slice(0, 10) + ' ' + result[i].date.slice(11, 16)
    }
  },

  onPullDownRefresh(){
    this.getNow(typeSelected , () => {
      wx.stopPullDownRefresh()
    })
  },
  // 菜单点击事件
  onClick(event){
    typeSelected = event.currentTarget.dataset.type
    this.setTypeSelected()
    this.getNow(typeSelected)
  },
  //菜单点击样式设置
  setTypeSelected(){
    let menuItem = []
    for (let i=0; i<7; i++) {
      let temp = this.data.menuItem[i]
      temp.select = '' 
      menuItem.push(temp)
    }
    menuItem[typeSelected].select = 'selected'
    this.setData({
      menuItem: menuItem
    })
  },
  // onSwiperTap(event){
  //   wx.navigateTo({
  //     url: '/pages/detail/detail?id=' + 1
  //   })
  // }

})