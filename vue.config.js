const path = require("path")


const target = "http://127.0.0.1:3000"

function resolve(dir){
    return path.join(__dirname,dir)
}



module.exports = {
    // assetsDir: 'static'
    //eslint-loader 将 lint 错误输出为编译错误
    publicPath: process.env.NODE_ENV !== 'production' ? "/" : "",
    lintOnSave: false,
    devServer: {
      proxy: {
        '/api': {
          target: target,
          changeOrigin: true,
        }
      },
    },
    chainWebpack: config => {
    //     config.module
    //   .rule('graphql')
    //   .test(/\.graphql$/)
    //   .use('graphql-tag/loader')
    //     .loader('graphql-tag/loader')
    //     .end()

      config.resolve.alias
        .set('@', resolve('src'))
        .set('assets', resolve('src/assets'))
        .set('components', resolve('src/components'))
    },
  }
  