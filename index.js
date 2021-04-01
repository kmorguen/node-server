var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(3000, function(){
    console.log('online')
})

//Socket setup
var io = socket(server);

io.on('connection', (socket) => {

    console.log(`Nouvelle connection ${socket.id}`)

    socket.on('chat', function(data){
        io.sockets.emit('chat', data)
    });

    socket.on('typing', function(data){
        io.sockets.emit('typing', data)
    });
})