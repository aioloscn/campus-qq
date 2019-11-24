const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const countDownKey = "CountDown"

const random = function generateMixed(n) {
  var res = "";
  for (var i = 0; i < n; i++) {
    var id = Math.ceil(Math.random() * 35);
    res += chars[id];
  }
  return res;
}

const cPromise = function (func) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: (res) => {
          resolve(res)
        },
        fail: (error) => {
          reject(error)
        }
      })
      func(args)
    })
  }
}

/**
 * 保存数据
 * @param k 键
 * @param v 值
 * @param t 过期时间，单位：毫秒
 */
const setGlobalInfo = function (k, v, t = 0) {
  wx.setStorageSync(k, v)
  const seconds = parseInt(t)
  if (seconds > 0) {
    let newTime = Date.parse(new Date());
    newTime = newTime / 1000 + seconds;
    wx.setStorageSync(k + countDownKey, newTime + "");
  } else {
    wx.removeStorageSync(k + countDownKey)
  }
}

/**
 * 获取数据
 * @param k 键
 * @returns {null|any | string}
 */
const getGlobalInfo = function (k) {
  const datetime = wx.getStorageSync(k + countDownKey)
  if (datetime) {
    if (parseInt(datetime) < Date.parse(new Date()) / 1000) {
      wx.removeStorageSync(k)
      console.log(k + "过期了")
      return null
    }
  }
  const res = wx.getStorageSync(k)
  if (res) return res
  else return null
}

/**
 * 保存用户的全局对象
 * @param v 用户对象数据
 * @param t 过期时间，单位：毫秒
 */
const setUserGlobalInfo = function (v, t = 0) {
  const userInfoStr = JSON.stringify(v);
  setGlobalInfo('userInfo', userInfoStr, t)
}

/**
 * 获取用户的全局对象
 * @returns {null|any}
 */
const getUserGlobalInfo = function () {
  const userInfoStr = getGlobalInfo('userInfo')
  if (userInfoStr)
    return JSON.parse(userInfoStr)
  return null
}

export {
    random,
    cPromise,
    setGlobalInfo,
    getGlobalInfo,
    setUserGlobalInfo,
    getUserGlobalInfo
}