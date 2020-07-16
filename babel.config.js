module.exports = (api) => {
  // 缓存
  // https://www.babeljs.cn/docs/config-files#apiversion
  api.cache(true)
  return {
    presets: [
    // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
      '@vue/cli-plugin-babel/preset'
    ],
    'env': {
      'development': {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      // https://panjiachen.github.io/vue-element-admin-site/guide/advanced/lazy-loading.html
        'plugins': ['dynamic-import-node']
      },
      'production': {
        plugins: [
          // 正式环境清楚console.log
          ['transform-remove-console', { exclude: ['error', 'warn'] }]
        ]
      }
    }
  }
}

