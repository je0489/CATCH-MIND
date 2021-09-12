import {
    handleMessageNotify
} from './chat';
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

socket.on("messageNotify", handleMessageNotify);