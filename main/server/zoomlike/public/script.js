const socket = io('/')
const videos = document.getElementById('videos')
const myVideo = document.createElement('video')
myVideo.muted = true

var peer = new Peer()
const myPeer = new Peer(undefined, {
    path: '/peerjs',
    host: '/',
    port: '5000',
})

const peers = {}
let myVideoStream
navigator.mediaDevices
    .getUserMedia({
        video: true,
        audio: true,
    })
    .then((stream) => {
        myVideoStream = stream
        addVideoStream(myVideo, stream)
            // if someone connect, raise an alert
        socket.on('user-connected', (userId) => {
            connectToNewUser(userId, stream)
            alert('Somebody connected', userId)
        })

        peer.on('call', (call) => {
            call.answer(stream)
            const video = document.createElement('video')
            call.on('stream', (userVideoStream) => {
                addVideoStream(video, userVideoStream)
            })
        })
    })

socket.on('user-disconnected', (userId) => {
    if (peers[userId]) peers[userId].close()
})

peer.on('open', (id) => {
    socket.emit('join-room', ROOM_ID, id)
})



const connectToNewUser = (userId, stream) => {
    const call = peer.call(userId, stream)
    const video = document.createElement('video')
    call.on('stream', (userVideoStream) => {
        addVideoStream(video, userVideoStream)
    })
    call.on('close', () => {
        video.remove()
    })

    peers[userId] = call
}

const addVideoStream = (video, stream) => {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play()
    })
    videos.append(video)
}



const muteUnmute = () => {
    const enabled = myVideoStream.getAudioTracks()[0].enabled
    console.log('muteUnmute')
    if (enabled) {
        myVideoStream.getAudioTracks()[0].enabled = false
        setUnmuteButton()
        console.log('Unmute')
    } else {
        setMuteButton()
        myVideoStream.getAudioTracks()[0].enabled = true
        console.log('mute')
    }
}

const setMuteButton = () => {
    const html = `
	  <i class="fas fa-microphone"></i>
	  <span>Mute</span>
	`
    document.querySelector('.muteButton').innerHTML = html
}

const setUnmuteButton = () => {
    const html = `
	  <i class="unmute fas fa-microphone-slash"></i>
	  <span>Unmute</span>
	`
    document.querySelector('.muteButton').innerHTML = html
}

const playStop = () => {
    let enabled = myVideoStream.getVideoTracks()[0].enabled
    if (enabled) {
        myVideoStream.getVideoTracks()[0].enabled = false
        setPlayVideo()
    } else {
        setStopVideo()
        myVideoStream.getVideoTracks()[0].enabled = true
    }
}

const setStopVideo = () => {
    const html = `
	  <i class="fas fa-video"></i>
	  <span>Stop Video</span>
	`
    document.querySelector('.videoButton').innerHTML = html
}

const setPlayVideo = () => {
    const html = `
	<i class="stop fas fa-video-slash"></i>
	  <span>Play Video</span>
	`
    document.querySelector('.videoButton').innerHTML = html
}

const quitMeeting = () => {
    location.href = "https://www.google.fr/";
}