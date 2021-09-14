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
    socket.on(events.disconnect, () =>
        broadcast(events.disconnected, {
            nickname: socket.nickname
        })
    );
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