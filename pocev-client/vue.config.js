module.exports = {
  chainWebpack: (config) => {
    config.devtool = 'eval-source-map';
    config.plugin('html').tap((args) => {
      args[0].template = 'public/index.cshtml';
      args[0].filename = '../../Views/Spa/Index.cshtml';
      args[0].inject = false;
      args[0].minify = false;
      return args;
    });
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 10240 }));
  },
};
