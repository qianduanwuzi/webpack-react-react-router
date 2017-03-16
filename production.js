var express = require('express')
var webpack = require('webpack')
var path = require("path")
var app = express()
var port = 3000

var WebpackDevMiddleware = require('webpack-dev-middleware')
var WebpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.js')
var compiler = webpack(config)


app.use(express.static(path.join(__dirname, 'build')));
app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));
app.use(WebpackHotMiddleware(compiler));
app.get('/*',function(request,response){
    if(request.url.indexOf(".") == -1) {
            response.sendFile(path.resolve(__dirname, 'build', "index.html"))
    }
})

var server = app.listen(port,function(){
    console.log('listening at http://localhost:' + port )
})

