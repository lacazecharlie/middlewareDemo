const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    const target = `https://www.googleapis.com`;

    const proxies = {};
    proxies[target] = [
        '/books',
    ];

    Object.keys(proxies).forEach(key => {
        proxies[key].forEach(calledUrl => {
            app.use(calledUrl, proxy({ target: key, changeOrigin: true }));
        });
    });
};
