// pages/cart/cart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart:[],
    allChecked:false,
    totalPrice:0
  },
  checkItem(e){
    const id =  e.currentTarget.dataset.id
    app.cartItemChange(id)
   console.log(id)
   this.AllCartChecked();
    this.setData({
      totalPrice: app.allPrice()
    })
  },
  AllCartChecked() {
    if (app.cart.every(item => item.checked === true)) {
      this.setData({
        allChecked: true
      })
    } else {
      this.setData({
        allChecked: false
      })
    }
  },
  allItemChecked(){
    this.setData({
      allChecked: !this.data.allChecked
    })
    console.log("cart",this.data.allChecked)
    app.allItemChecked(this.data.allChecked)
    this.getData()
    this.setData({
      totalPrice: app.allPrice()
    })
  },
  jian(e){
    const cartItem = this.data.cart.filter(item => item.id === e.currentTarget.dataset.id )[0];
    app.reduce(cartItem)
    this.getData()
  },
  getData(){
    this.setData({
      cart: app.cart
    })
  },
  jia(e) {
    const cartItem = this.data.cart.filter(item => item.id === e.currentTarget.dataset.id)[0];
    app.increse(cartItem)
    this.setData({
      cart: app.cart
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
    this.setData({
      cart: app.cart,
    })
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