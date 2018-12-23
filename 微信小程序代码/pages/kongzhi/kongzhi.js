Page({
  open:function () {
wx.request({
 
  url:'https://api.heclouds.com/cmds?device_id=505295538',
  
  header: {
    'content-Type':'application/json',
    'api-key':'tEGAhqrzfNptIvmOQ3Ptr2PnIsg='
  },
  method: 'POST',
  data: {
   switch0:1
},
  success: function (res) {
    console.log(res)
  }, fail: function (res) {
    console.log(res)
  },
  complete: function (res) {
    console.log(res)
  }
})
},
close: function () {
    wx.request({

      url: 'https://api.heclouds.com/cmds?device_id=505295538',

      header: {
        'content-Type': 'application/json',
        'api-key': 'tEGAhqrzfNptIvmOQ3Ptr2PnIsg='
      },
      method: 'POST',
      data: {
        switch0: 0
      },
      success: function (res) {
        console.log(res)
      }, fail: function (res) {
        console.log(res)
      },
      complete: function (res) {
        console.log(res)
      }
    })
  },
  backBtn: function (options) {
    wx.navigateBack()
  },
  /**
   * 页面的初始数据
   */
  data: {
    url: "../../Image/close.png"
  },
  change: function () {
    this.setData({
      url: "../../Image/open.png"

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})