class StorageUtil {
  setCache(value: any, key: any, localStorage = true) {
    if (localStorage) {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else window.sessionStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: any, localStorage = true) {
    let value
    if (localStorage) {
      value = window.localStorage.getItem(key)
    } else {
      value = window.sessionStorage.getItem(key)
    }

    if (value && value !== 'undefined') {
      return JSON.parse(value)
    }
    return ''
  }
  clearCache() {
    window.localStorage.clear()
    window.sessionStorage.clear()
  }
  clearUserCache() {
    window.localStorage.removeItem('MisKeepPassword')
    window.localStorage.removeItem('MAccountPassword')
    window.sessionStorage.removeItem('MisKeepPassword')
    window.sessionStorage.removeItem('MAccountPassword')
  }
}
export default new StorageUtil()
