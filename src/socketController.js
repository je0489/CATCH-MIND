import events from './events';

const sockeetController = (socket) => {
    socket.on(events.setNickname, ({
        nickname
    }) => {
        console.log(nickname);
        socket.nickname = nickname;
    });
    // socket.on("newMessage", ({
    //     message
    // }) => socket.broadcast.emit("messageNotify", {
    //     message,
    //     nickname: socket.nickname || "NONE"
    // }));
    // socket.on("setNickname", ({
    //     nickname
    // }) => socket.nickname = nickname);
}

export default sockeetController;