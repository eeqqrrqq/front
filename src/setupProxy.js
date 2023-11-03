const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/demo/test', // < = axios.get('/demo/test') 
    createProxyMiddleware({
      target: 'http://localhost:8080',	// 백앤드 주소
      changeOrigin: true,
    })
  );
};