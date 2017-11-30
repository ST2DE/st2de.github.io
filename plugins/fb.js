/*eslint-disable */

import vue from 'vue'
vue.prototype.$initFbSDK = () => {
  FB.init({
    appId: '753526171461122',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v2.11'
  })
}

/*eslint-disable */
