import events from './events';

const sockeetController = (socket) => {
    const broadcast = (event, data) => socket.broadcast.emit(event, data);

    socket.on(events.setNickname, ({
        nickname
    }) => {
        socket.nickname = nickname;
        broadcast(events.newUser, {
            nickname
        });
    });
    socket.on(events.disconnect, () => {
        broadcast(events.disconnected, {
            nickname: socket.nickname
        });
    });
    socket.on(events.senndMsg, ({
        message
    }) => {
        broadcast(events.newMsg, {
            message,
            nickname: socket.nickname
        });
    });
}

export default sockeetController;