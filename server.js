const express = require('express'); 			// import express
const app = express();						// express is a function call which create an
const http = require('http').Server(app);
const io = require('socket.io')(http);
const an = require('./artnet').artnet;
const artNet = new an();


http.listen(3000, function(){				// begins a server which listens on port 3000
  console.log('listening on *:3000');
});
app.use(express.static('dist')); 	// serve the static files found in the 'dist' folder


io.on('connection', function(socket){
  socketConnect(socket); // call function when socket is connecting

    socket.on('r', function(data){
      allSetColor(data);
    });
    socket.on('g', function(data){
        console.log(data);
    });
    socket.on('b', function(data){
        console.log(data);
    });
    socket.on('w', function(data){
        console.log(data);
    });
    socket.on('fill', function(data){
      artNet.fillStrips(255);
    });
    socket.on('clear', function(data){
      artNet.fillStrips(0);
    });
    
    socket.on('disconnect', function(){
        socketDisconnect(socket); // call function when client is disconnecting
    });

});

var socketIDs = []; // array which takes care of connected IDs

function socketConnect(socket) {
	// there exist a socket, when a new connection is made. Therefore the argument
	// is the socket.

	// There has to be code in the client which tells the client to connect
	// to the server (and triggers the new connection event). 
			
			// Add a reference to the socket.io library in the index.html
			// Write the socket.io code in the UI (or what-ever js). 

    socketIDs.push(socket.id);
    console.log ("connected, clients array: " + socketIDs);
    
}

function socketDisconnect (socket) {
    var i = socketIDs.indexOf(socket);
    socketIDs.splice(i, 1); // delete socket.id from socketIDs array
    
    console.log ("disconnected, clients array: " + socketIDs);
}
