export default {
  install: function(Vue) {
    // 在插件中安装过滤器格式化时间
    Vue.filter('timeFormat', function(value) {
      let time = new Date(value)
      let month = time.getMonth() + 1
      let date = time.getDate()
      month = month > 9 ? month : ('0' + month)
      date = date > 9 ? date : ('0' + date)
      return time.getFullYear() + '-' + month + '-' + date
    })

    // 在插件中混入数据x:100
    Vue.mixin({
      data() {
        return {
          x: 100
        }
      }
    })
    
    // 在Vue原型上添加一个方法，这样vm和vc都能调用
    Vue.prototype.hello = () => {
      console.log('hello')
    }
  }
}