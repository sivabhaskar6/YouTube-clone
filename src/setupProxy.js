const {
  createProxyMiddleware,
  responseInterceptor,
} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/suggestions",
    createProxyMiddleware({
      target: "https://suggestqueries.google.com",
      changeOrigin: true,

      pathRewrite: {
        "^/api/suggestions": "/complete/search",
      },

      selfHandleResponse: true,

      onProxyRes: responseInterceptor(async (responseBuffer) => {
        const text = responseBuffer.toString();

        const start = text.indexOf("[");
        const end = text.lastIndexOf("]");

        if (start === -1 || end === -1) {
          return JSON.stringify([]);
        }

        return text.substring(start, end + 1);
      }),
    })
  );
};