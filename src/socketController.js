import events from './events';

const sockeetController = (socket) => {
    socket.on(events.setNickname, ({
        nickname
    }) => {
        socket.nickname = nickname;
        socket.broadcast.emit(events.newUser, {
            nickname
        });
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