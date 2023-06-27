const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const { v4: uuidV4 } = require('uuid');

const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
    debug: true
});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/peerjs', peerServer);

// Rendering a new room on a new connection
app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`);
})

// Rendering the requested room
app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room });
})

server.listen(3030, () => {
    console.log('Started listening!!');
});

// On connecting to a new client
io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {

        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-connected', userId);

        // Sending a new message to common chat
        socket.on('sendMessage', (message) => {
            io.to(roomId).emit('addNewMessage', message);
        })

        // On disconnecting
        socket.on('disconnect', () => {
            socket.broadcast.to(roomId).emit('user-disconnected', userId);
        })
    })
})

