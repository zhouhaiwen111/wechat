// pages/list/list.js
const app = getApp();
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
      list:[],
      page:1,
      mallid:"1",
      total:0
  },
  todetail(e){
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`,
    })
  },
  toAddCart(e){
    const item = this.data.list.filter(item => item.id === e.currentTarget.dataset.id)[0]
    app.toAddCart(item);
  },
  loadmore(){
    if (this.data.page >= this.data.total) {
      return;
    }
   this.bookList();
   this.data.page++;

  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    }),
    this.setData({
      mallid:options.id
    }),
    this.bookList()
   
  },
bookList(){
  wx.showLoading({
    title: '加载中',
  }),
  wx.request({
    url: `http://rap2api.taobao.org/app/mock/115671/api/classification/${this.data.mallid}`,
    success: (resp) => {
      console.log(resp.data)
      this.setData({
        list: this.data.list.concat(resp.data.data),
        total: resp.data.total
        
      })
     
    },
   
    complete: () => {
      wx.hideLoading();
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
    app.setBadge()
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