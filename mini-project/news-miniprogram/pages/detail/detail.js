Page({

  data: {
    content: [],
    firstImage: '',
    date: '',
    source: '',
    title: ''

  },
  onLoad: function(option) {
    var newsid = option.id;
    this.getNews(newsid);
  },
  getNews(newsid) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        'id': newsid
      },
      success: res => {
        let result = res.data.result;
        this.setDate(result)
        this.setData({
          date: result.date,
          firstImage: result.firstImage,
          source: result.source,
          title: result.title,
          content: result.content
        })
      }
    })
  },
  setDate(result) {
    result.date = result.date.slice(0, 10) + ' ' + result.date.slice(11, 16)
  },
})