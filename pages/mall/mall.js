// pages/mall/mall.js
var sliderWidth = 96
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["文学艺术", "人文社科", "少儿图书", "教育考试", "经济金融", "生活休闲", "科学技术", "新华定制","政策扶持","文华生活","知识教育","旅游休闲"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    list:[]
  },
  toList(e){
    wx.navigateTo({
      url: `/pages/list/list?id=${e.currentTarget.dataset.id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      },
    });
    wx.request({
      url: `http://rap2api.taobao.org/app/mock/85801/api/v1/fenye/${1}`,
      success: (resp) => {
        this.setData({
          list:resp.data.data
        })
      }
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id,
    });
    wx.request({
      url: `http://rap2api.taobao.org/app/mock/85801/api/v1/fenye/${e.currentTarget.dataset.id}`,
      success: (resp) => {
        this.setData({
          list: resp.data.data
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