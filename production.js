var express = require('express')
var path = require("path")
var app = express()
var port = 3000

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*',function(request,response){
//    
    if(request.url.indexOf(".") == -1) {
            response.sendFile(path.resolve(__dirname, 'build', "index.html"))
    }
})

var server = app.listen(port,function(){
    // var host = server.address().address;
    // var port = server.address().port;
    console.log('listening at http://localhost:' + port )
})

