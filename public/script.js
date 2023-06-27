const socket = io('/');
const videoGrid = $('#video-grid');
const myVideo = document.createElement('video');
myVideo.muted = false;

var peer = new Peer(undefined, {
    path: '/peerjs',
    host: '/',
    port: '3030'
});

let myVideoStream;
const peers = {}

// On joining
peer.on('open', (userId) => {
    socket.emit('join-room', ROOM_ID, userId);
})

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
})
.then((stream) => {
    
    // Adding our own vedio stream to webpage
    addVideoStream(myVideo, stream);

    peer.on('call', (call) => {
        call.answer(stream);
        const video = document.createElement('video');
        call.on('stream', (userVideoStream) => {
            addVideoStream(video, userVideoStream);
        })
    })

    // Adding new users vedio stream
    socket.on('user-connected', (userId) => {
        connecToNewUser(userId, stream);
    })
})
.catch((err) => console.log(err));

// On disconnecting
socket.on('user-disconnected', userId => {
    if(peers[userId]) peers[userId].close();
})

// Function to add new User
const connecToNewUser = (userId, stream) => {
    const call = peer.call(userId, stream);
    const video = document.createElement('video');
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream);
    })

    peers[userId] = call;

    call.on('close', () => {
        video.remove();
    })
}

// Function to add new vedio 
const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video);
}


// Chat functionality

let text = $('input');

$('html').keydown((e) => {
    if(e.which == 13 && text.val().length !== 0)
    {
        socket.emit('sendMessage', text.val());
        text.val('');
    }
})

socket.on('addNewMessage', message => {
    $('.messages').append(`<li class = "message" ><b></b><br/>${message}</li>`);
})