const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
server.get('*', (req, res) => {
  
  const context = {
	 title: 'hello',
	 meta: `
   <meta name="description" content="">
   <meta name="generator" content="GitBook 3.2.3">
		`
	}
  const app = new Vue({
    data: {
      url: req.url
    },
    template:  require('fs').readFileSync('./index.template.html', 'utf-8')
  })
  renderer.renderToString(app, (err, html) => {
  console.log('html',html) // will be the full page with app content injected.
   //res.end(html) // will be the full page with app content injected.
  })

})
server.listen(8080) 

