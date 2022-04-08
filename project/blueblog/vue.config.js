module.exports = {
  devServer: {
    proxy: {
      '/7000': {
        target: 'http://localhost:7000', // 接口地址
        pathRewrite: { '^/7000': '' }, // 路径重写，匹配所有/api替换成空
        ws: true, // 是否启用websockets
        changeOrigin: true,
        // 中间服务器将请求转发给接口的时候谎称自己不是由其他端口转发来的，默认true可以不写
        // changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
        // changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
      }
    }
  }
}