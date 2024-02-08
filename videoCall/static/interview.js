let peerConnection;
let localStream;
let remoteStream = document.getElementById("user-2")
var myChannelName;

let our = document.getElementById("user-1");

let servers = {
    iceServers: [
        {
            urls: ['stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302']
        }
    ]
};

var peerGlobal;

async function init() {
    
}

const btnToggleVideo = document.querySelector("#mute")
const btnToggleAudio = document.querySelector("#unmute")

var userMedia = navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            localStream = stream;
            our.srcObject = localStream;
            our.muted = true;

            var audioTracks = stream.getAudioTracks();
            var videotracks = stream.getVideoTracks();

            audioTracks[0].enabled = true;
            videotracks[0].enabled = true;

            btnToggleAudio.addEventListener("click", () => {
                console.log("F")
                audioTracks[0].enabled = !audioTracks[0].enabled;
            })

            btnToggleVideo.addEventListener("click", () => {
                console.log("F")
                videotracks[0].enabled = !videotracks[0].enabled;
            })

        })

const chatSocket = new WebSocket(
    "ws://" + 
    window.location.host + 
    "/ws/chat/" +
    roomName + 
    "/"
);

chatSocket.onmessage = async function(e) {
    let data = JSON.parse(e.data);
    var peerUser = data.username;
    var action = data.action;

    if (data.type == "tester_message") {
        console.log(data.tester);
        return;
    }

    if (data.type == "chat_message") {
        console.log(data);
        document.querySelector(".chats").innerHTML += "<p>" + peerUser + ": " + data.message; 
        return;
    }

    if (action == "channel_receiving") {
        myChannelName = data.channel;
        console.log(myChannelName);
        return;
    }

    if (username == peerUser) return;

    var receiver_channel_name = data["message"]["receiver_channel_name"];


    if (action == "new-peer") {
        console.log("IN NEW PEER + RECEIVER CHANNEL NAME\n\n\n\n\n\n\n\n\n\n" + receiver_channel_name)
        createOfferer(peerUser, receiver_channel_name);
    }

    if (action == "new-offer") {
        var offer = data.message.sdp;

        createAnswerer(offer, peerUser, receiver_channel_name);

        return;
    }

    if (action == "new-answer") {
        var answer = data.message.sdp;
        console.log("ANNSWER RECEIVEDDDDD");
        peerGlobal.setRemoteDescription(answer);

        return;
    }
}


init();

document.querySelector("#submit").onclick = function (e) {
    const messageInput = document.querySelector("#messageInput");
    e.preventDefault();

    sendSignal("chat", messageInput.value);
    messageInput.value = "";
}

document.querySelector("#joinCall").onclick = function (e) {
    e.preventDefault();
    sendSignal("new-peer", {
        "receiver_channel_name":myChannelName,
        "username" : username
    });
    console.log({
        "receiver_channel_name":myChannelName
    })
    
}

function sendSignal(action, message){
    var jsonSTR = JSON.stringify({
        "username":username,
        "action":action,
        "message":message
    })

    chatSocket.send(jsonSTR);
}


function createOfferer(peerUsername, receiver_channel_name) {
    var peer = new RTCPeerConnection(servers);
    
    peerGlobal = peer;

    addLocalTracks(peer);

    setOnTrack(peer, remoteStream);

    peer.addEventListener("iceconnectionstatechange", () => {
        var iceConnectionState = peer.iceConnectionState;

        if (iceConnectionState === "failed" || iceConnectionState === "disconnected" || iceConnectionState === "closed") {
            if (iceConnectionState != closed) {
                peer.close()
            }
            
            removeVideo();
        }
    })

    peer.addEventListener("icecandidate", (event) => {
        if (event.candidate) {
            return;
        }

        sendSignal("new-offer", {
            "sdp":peer.localDescription,
            "receiver_channel_name":receiver_channel_name
        });
    })

    peer.createOffer()
        .then(o => peer.setLocalDescription(o))
        .then(() => {
            console.log("SET LOCAL DESC.")
        })

}

function createAnswerer(offer, peerUsername, receiver_channel_name) {
    var peer = new RTCPeerConnection(servers);

    peerGlobal = peer;

    addLocalTracks(peer);

    setOnTrack(peer, remoteStream);

    peer.addEventListener("iceconnectionstatechange", () => {
        var iceConnectionState = peer.iceConnectionState;

        if (iceConnectionState === "failed" || iceConnectionState === "disconnected" || iceConnectionState === "closed") {
            if (iceConnectionState != closed) {
                peer.close()
            }
            
            removeVideo();
        }
    })

    peer.addEventListener("icecandidate", (event) => {
        if (event.candidate) {
            console.log("NEW CANDIDATE: " + JSON.stringify(peer.localDescription))
            return;
        }

        sendSignal("new-answer", {
            "sdp":peer.localDescription,
            "receiver_channel_name":receiver_channel_name
        });
    })

    peer.setRemoteDescription(offer)
        .then(() => {
            console.log("Remote Description sent succesfully")

            peer.createAnswer()
                .then((a) => {
                    peer.setLocalDescription(a);
                })
        })
}


function addLocalTracks(peer) {
    localStream.getTracks().forEach(track => {
        peer.addTrack(track, localStream);
    });

    return;
}

function setOnTrack(peer, remoteVideo) {
    remoteS = new MediaStream();

    remoteVideo.srcObject = remoteS;

    peer.addEventListener("track", async (event) => {
        remoteS.addTrack(event.track, remoteS);
    })
}

function removeVideo() {
    remoteStream.srcObject = "";
}