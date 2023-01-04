const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const static = require("koa-static");

app.use(static('../static'))
app.use(router.routes());

router.get('/ja', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});


// // 中间件 2 
app.listen(3000, '127.0.0.1', () => {
    console.log(`Server is starting`);
});