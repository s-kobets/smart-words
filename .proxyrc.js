const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: process.env.PROXY || 'http://localhost:8000/',
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
