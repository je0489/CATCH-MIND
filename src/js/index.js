const socket = io("/");

function sendMessage(message) {
    socket.emit("newMessage", {
        message
    });
}

function setNickname(nickname) {
    socket.emit("setNickname", {
        nickname
    });
}

function handleMessageNotify(data) {
    const {
        message,
        nickname
    } = data;
    console.log(`${nickname}: ${message}`);
}

socket.on("messageNotify", handleMessageNotify);