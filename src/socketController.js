import events from './events';

let sockets = [];

/**
 * 
 * @param {*} socket 
 * @param {socket.io} io connected 상태인 모든 socket에게 event emit(본인 socket 포함)
 */
const sockeetController = (socket, io) => {
    const broadcast = (event, data) => socket.broadcast.emit(event, data);
    const superBroadcast = (event, data) => io.emit(event, data);
    const sendPlayerUpdate = () =>
        superBroadcast(events.playerUpdate, {
            sockets
        });

    socket.on(events.setNickname, ({
        nickname
    }) => {
        socket.nickname = nickname;
        sockets.push({
            id: socket.id,
            points: 0,
            nickname
        });
        broadcast(events.newUser, {
            nickname
        });
        sendPlayerUpdate();
    });
    socket.on(events.disconnect, () => {
        sockets = sockets.filter(s => s.id !== socket.id);
        broadcast(events.disconnected, {
            nickname: socket.nickname
        });
        sendPlayerUpdate();
    });
    socket.on(events.senndMsg, ({
            message
        }) =>
        broadcast(events.newMsg, {
            message,
            nickname: socket.nickname
        })
    );
    socket.on(events.beginPath, ({
            x,
            y
        }) =>
        broadcast(events.beganPath, {
            x,
            y
        })
    );
    socket.on(events.strokePath, ({
            x,
            y,
            color
        }) =>
        broadcast(events.strokedPath, {
            x,
            y,
            color
        })
    );
    socket.on(events.fill, ({
        color
    }) => {
        console.log(color)
        broadcast(events.filled, {
            color
        })
    });
}

export default sockeetController;