import {
    config
} from '../config.js'

const tips = '未知错误'

class HTTP {
    cRequest({url, data={}, method='GET', isParam=false}) {
        return new Promise((resolve, reject) => {
            this._request(url, resolve, reject, data, method, isParam);
        })
    }

    _request(url, resolve, reject, data={}, method='GET', isParam=false) {
        wx.request({
            url: config.serverUrl + url,
            method: method,
            data: data,
            header: {
                'content-type': isParam ? 'application/x-www-form-urlencoded' : 'application/json',
            },
            success: (res) => {
                const code = res.cdoe ? res.code.toString() : (res.statusCode ? res.statusCode.toString() : '0');
                if (code === '200') {
                    resolve(res.data);
                } else {
                    reject();
                    const error_msg = res.data ? res.data.msg : '';
                    this._show_error(error_msg);
                }
            },
            fail: (err) => {
                reject();
                this._show_error(tips);
            }
        })
    }

    _show_error(error_msg) {
        wx.showToast({
            title: error_msg,
            icon: 'none',
            duration: 2000
        });
    }
}

export {HTTP}