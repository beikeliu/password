// index.js
// 获取应用实例
const createPassword = require("../../utils/createPassword")
Page({
  data: {
    password: undefined,
    len: 12,
    hasNumbers: true,
    hasSymbols: true,
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
    const {
      detail
    } = event;
    const {
      value
    } = detail;
    if (value < 18) {
      this.setData({
        len: value
      })
    } else {
      this.setData({
        len: 18
      })
    }
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