// index.js
// 获取应用实例
const createPassword = require("../../utils/createPassword")
Page({
  data: {
    password: undefined,
    len: 8,
    hasNumbers: true,
    hasSymbols: false,
    hasLowAlpha: true,
    hasCapAlpha: true,
    reIcon: "../../icon/refresh.png"
  },
  onLoad() {
    this.generate();
    wx.getSystemInfoAsync({
      success: (info) => {
        const {theme} = info
        this.changeIcon(theme)
      }
    })
    wx.onThemeChange(({ theme }) => {
      this.changeIcon(theme)
    })
  },
  onLen(event) {
    this.setData({
      len: event.detail.value
    })
  },
  refresh() {
    wx.vibrateShort({
      type: "light"
    })
    this.generate();
  },
  generate() {
    this.setData({
      password: createPassword(this.data.len, this.data.hasNumbers, this.data.hasSymbols, this.data.hasLowAlpha, this.data.hasCapAlpha)
    })
  },
  copy() {
    wx.setClipboardData({
      data: this.data.password,
    })
  },
  changeIcon(theme) {
    if (theme === "light") {
      this.setData({
        reIcon: "../../icon/refresh.png"
      })
    } else {
      this.setData({
        reIcon: "../../icon/refresh1.png"
      })
    }
  }
})