// index.js
// 获取应用实例
const createPassword = require("../../utils/createPassword")
Page({
  data: {
    password: undefined,
    len: 8,
    hasNumbers: true,
    hasSymbols: true,
  },
  onLoad() {
    this.generate()
  },
  generate() {
    this.setData({
      password: createPassword(this.data.len, this.data.hasNumbers, this.data.hasSymbols)
    })
  },
  copy() {
    wx.setClipboardData({
      data: this.data.password,
    })
  },
  toDocs() {
    const appId = "wxd45c635d754dbf59"
    wx.navigateToMiniProgram({
      appId,
    })
  }
})