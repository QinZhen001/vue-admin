// const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const CompressionPlugin = require('compression-webpack-plugin');
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const path = require("path")


const target = "http://127.0.0.1:3000"

function resolve(dir) {
  return path.join(__dirname, dir)
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
  configureWebpack: {
    plugins: [
      // new CompressionPlugin(),
      // new BundleAnalyzerPlugin(),
      // new webpack.DllReferencePlugin({
      //   context: process.cwd(),
      //   manifest: require('./public/vendor/vendor-manifest.json')
      // }),
      // 将 dll 注入到 生成的 html 模板中
      // new AddAssetHtmlPlugin({
      //   // dll文件位置
      //   filepath: path.resolve(__dirname, './public/vendor/*.js'),
      //   // dll 引用路径
      //   publicPath: './vendor',
      //   // dll最终输出的目录
      //   outputPath: './vendor'
      // })
    ]
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
