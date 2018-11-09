// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541081312827&di=1d5984d69453b03ddbff330a1f113d62&imgtype=0&src=http%3A%2F%2Fbaiducdn.pig66.com%2Fuploadfile%2F2017%2F0511%2F20170511080341223.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541081312820&di=721da174ee3f2006907610f49907f3eb&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20170121%2F3661391484963119.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541081312827&di=350a916adc86505c637bf51c505ccf52&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180803%2F20%2F1533299303-YxLnezOFQZ.jpg'
    ],
    list:[],
    listdata:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    inputShowed: false,
    inputVal: "",
    circular:true
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  tolist(e){
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        url: 'http://rap2api.taobao.org/app/mock/85801/api/vi/books',
        success:(resp) => {
         
          this.setData({
            list:resp.data.data
            
          })
        }
      }),
      wx.request({
        url: 'http://rap2api.taobao.org/app/mock/85801/api/v1/today',
        success: (resp) => {
          this.setData({
            listdata: resp.data.data
          })
        }
      })
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})