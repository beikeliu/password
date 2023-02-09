// createPassword.js
const alpha = 'qwertyuiopasdfghjklzxcvbnm'
const numbers = '01234567890123456789'
const symbols = '!@#$%^&*_-=+!@#$%^&*_-=+'


const createPassword = (length, hasNumbers, hasSymbols, hasLowAlpha, hasCapAlpha) => {
  let chars = ''
  let password = ''
  hasLowAlpha ? (chars += alpha) : ''
  hasCapAlpha ? (chars += alpha.toUpperCase()) : ''
  hasNumbers ? (chars += numbers) : ''
  hasSymbols ? (chars += symbols) : ''
  if (!hasNumbers && !hasSymbols && !hasLowAlpha && !hasCapAlpha) {
    return ''
  }
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

module.exports = createPassword