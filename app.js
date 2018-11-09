//app.js
App({
  onLaunch(){
   this.setBadge()
  },
  onShow(){
    this.setBadge()
  },
  cart: wx.getStorageSync("key") || [],
  allNum:0, 
  setBadge(){
    this.allNum = this.cart.reduce((result, item) => {
      result += item.count;
      return result;
    },0)
    wx.setTabBarBadge({
      index: 2,
      text: `${this.allNum}`
    }); 
  },
  toAddCart(item){
    const isCart = this.cart.some(cartitem => cartitem.id === item.id);
    if(isCart){
      this.cart = this.cart.map(one => {
        if(one.id === item.id){
          one.count++;
        }
        return one;
      })
    }else{
      this.cart.push({
        ...item,
        count:1,
        checked: false
      })
    }
    this.setBadge();
 
    wx.setStorageSync('key', this.cart)
  },
  reduce(cartItem){
    this.cart.map(item => {
      if (item.id === cartItem.id) {
        if(item.count>1){
          item.count -= 1;
        }else{
          this.cart = this.cart.filter(item => item.id !== cartItem.id)
        }
      }
      return item;
    })
    wx.setStorageSync('key', this.cart)
    this.setBadge()
  },
  increse(cartItem) {
    this.cart.map(item => {
      if (item.id === cartItem.id) {
          item.count += 1;

      }
      return item;
    })
    this.setBadge()
    wx.setStorageSync('key', this.cart)
  },
  cartItemChange(id) {
    this.cart = this.cart.map(item => {
      if (item.id == id) {
        item.checked = !item.checked;
      }
      console.log(item.checked)
      return item;
    })
  },
  allItemChecked(allChecked) {
    console.log("app", allChecked)
    this.cart=this.cart.map(item => {
      item.checked = allChecked
      return item;
      })
    wx.setStorageSync('key', this.cart)
  },
  allPrice(){
    return this.cart.filter(item => item.checked===true).reduce((result,item) =>{
      result += item.count * item.price
      return result
    },0)
  }
  
})