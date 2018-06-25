let SELECTEDCOLOR = "red";
let UNSELECTEDCOLOR = "black";

Page({

  data: {
    result: [],
    date: '',
    title: '',
    firstImage: '',
    source: '',
    id: '',
    selectedItem:'ty',
    //menu
    menuItem: [
      { "text": "推荐", "list": "ty", "index": "0", "color": SELECTEDCOLOR },
      { "text": "国内", "list": "gn", "index": "1", "color": UNSELECTEDCOLOR },
      { "text": "国际", "list": "gj", "index": "2", "color": UNSELECTEDCOLOR },
      { "text": "财经", "list": "cj", "index": "3", "color": UNSELECTEDCOLOR },
      { "text": "娱乐", "list": "yl", "index": "3", "color": UNSELECTEDCOLOR },
      { "text": "军事", "list": "js", "index": "4", "color": UNSELECTEDCOLOR },
      { "text": "其他", "list": "other", "index": "5", "color": UNSELECTEDCOLOR }
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
    this.getNow()
  },
  onPullDownRefresh(){
    this.getNow(() => {
      wx.stopPullDownRefresh()
    })
  },
  // 菜单点击事件
  onClick(event){
    if (this.data.selectedItem == event.currentTarget.dataset.list){
      return;
    }
    this.data.menuItem.forEach(function (value) {
      if (value.list == event.currentTarget.dataset.list) {
        value.color = SELECTEDCOLOR;
      } else {
        value.color = UNSELECTEDCOLOR;
      }
    });
    this.setData({
      menuItem: this.data.menuItem,
      selectedItem: event.currentTarget.dataset.list
    })
    this.getNow()
  },
  getNow(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        'type': this.data.selectedItem
      },
      success: res => {
        let result = res.data.result;
        this.setDate(result);
        console.log(result);
        this.setData({
          result: result
        });
      },
      complete: () => {
        callback && callback()
      }
    })
  },

  setDate(result){
    for( var i = 0; i < result.length; i++){
      result[i].date = result[i].date.slice(0, 10) + ' ' + result[i].date.slice(11, 16)
    }
  }
})