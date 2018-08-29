/**
 * Created by 源 on 2017/7/17.
 */
const http = require('http');

// hot load for node.js
http.createServer(function (req, res) {
    Object.keys(require.cache).forEach((module) => {
        if (!module.match(/node_modules/)) {
            delete require.cache[module];
        }
    });
    require('./koa').callback()(req, res);
}).listen(9090, () => {
    console.log('dev server is listen on port:', 9090);
});