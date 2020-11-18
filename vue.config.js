module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  lintOnSave: process.env.NODE_ENV === 'development',  //eslint检查
}