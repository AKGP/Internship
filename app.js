var express = require('express');
var app = express();
var socket_io = require('socket.io');
var http = require('http').Server(app);
var io = socket_io(http);
var dl = require('delivery');
var fs = require('fs');
app.use(express.static(__dirname+'/public'));
app.get('/', function(req, res){
  res.sendFile('index.html');
})
io.on('connection', function(socket){
  	socket.on('from-client-txt', function(msg){
   	io.emit('chat txt',msg);
  	});
  	socket.on('image',function(dataUrl){
  		io.emit('chat image',dataUrl);
  	});
});
http.listen(3000, function(){
  console.log('listening on *:3000');
});