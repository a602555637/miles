const Koa = require('koa')
// const Next = require('Next')
const Router = require('koa-router')


// const dev = process.env.NODE_ENV !== 'production'
// const app = Next({dev})
// const handle = app.getRequestHandler()

// app.prepare().then(()=> {
  const server = new Koa()
  const router = new Router()
  router.get('/test', (ctx)=> {
    ctx.body = '<p>12345helooo</p>'
  })

  server.use(async(ctx, next)=> {
    await next()
  })

  server.use(router.routes())

  server.listen(3000, ()=> {
    console.log('koa server listening on 3000')
  })
// })