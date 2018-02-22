const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: require('fs').readFileSync('./template/index.template.html', 'utf-8')
  })

  renderer.renderToString(app, (err, html) => {
    res.send(html) // will be the full page with app content injected.
  })
})
server.listen(8080)
