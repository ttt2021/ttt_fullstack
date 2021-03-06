const Koa = require('koa');
const app = new Koa()

const main = ctx => {
    console.log(ctx.request.url)
    if (ctx.request.url !== '/') {
        ctx.response.type = 'html'
        ctx.response.body = '<a href="/">Index Page</a>'
    } else {
        ctx.response.body = 'hello world'
    }
}

app.use(main)

app.listen(3000, () => {
    console.log('3000端口已启动')
})