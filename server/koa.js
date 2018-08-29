const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
var cors = require('koa-cors');
const path = require('path');
const html1 = '<h1>天涯2</h1>';
// const fs = require("fs");
const texts = [{ "name": "Jani", "country": "Norway" }, { "name": "he", "country": "Sweden" }, { "name": "kon", "country": "Denmark" }];
// 获取ipv4
var os = require('os'),
    iptable = {},
    ifaces = os.networkInterfaces();
for (var dev in ifaces) {
    ifaces[dev].forEach(function (details, alias) {
        if (details.family == 'IPv4') {
            iptable[dev + (alias ? ':' + alias : '')] = details.address;
            console.log("IPV2");
            console.log(details.address);
        }
    });
}
console.log("IPV4");
console.log(iptable);
app.use(cors());
router.get('/home/:name', async (ctx, next) => {
    const name = ctx.params.name;
    ctx.response.body = texts;
});

router.all('/', async (ctx, next) => {
    ctx.response.body = html1;
});

app.use(async (ctx, next) => {
    const d1 = Date.now();
    await next();
    const d2 = Date.now();
    console.log(`spend time: ${d2 - d1}ms`);
})

app.use(router.routes());

module.exports = app;