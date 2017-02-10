var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var path = require('path');
var port = process.env.PORT || 3000;;

app.use(express.static(path.join(__dirname, 'public')));

io.on("connection", function(socket){

});

if (process.env.IP){
  http.listen(port, process.env.IP, function(){
    console.log('listening on *:' + port);
  });
}else{
  http.listen(port, function(){
    console.log('listening on *:' + port);
  });
}
