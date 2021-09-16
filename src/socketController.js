import events from './events';
import {
    chooseWord
} from "./words";

let sockets = [];
let inProgress = false;
let word = null;
let leader = null;
let timeout = null;

const chooseLeader = () => sockets[Math.floor(Math.random() * sockets.length)];
const isNotAlone = () => sockets.length > 1;

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
    const startGame = () => {
        if (inProgress === false) {
            leader = chooseLeader();
            word = chooseWord();
            inProgress = true;

            // 1. 모든 사람에게 게임 시작 event emit
            // 2. 리더에게 일방적으로 event emit
            setTimeout(() => {
                superBroadcast(events.startedGame);
                io.to(leader.id).emit(events.notifyLeader, {
                    word
                });
                timeout = setTimeout(endGame, 10000);
            }, 2000);
        }
    }
    const addPoints = winnerID => {
        sockets = sockets.map(s => {
            if (winnerID == s.id)
                s.points += 10;
            return s;
        });
        sendPlayerUpdate();
        endGame();
    }
    const endGame = () => {
        inProgress = false;
        superBroadcast(events.endedGame);
        if (timeout !== null)
            clearTimeout(timeout);
        if (isNotAlone())
            setTimeout(() => startGame(), 2000);
    }

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
        if (isNotAlone())
            startGame();
    });
    socket.on(events.disconnect, () => {
        sockets = sockets.filter(s => s.id !== socket.id);
        broadcast(events.disconnected, {
            nickname: socket.nickname
        });
        sendPlayerUpdate();
        if (!isNotAlone())
            endGame();
        else if (leader && leader.id === sockets.id)
            endGame();
    });
    socket.on(events.sendMsg, ({
        message
    }) => {
        broadcast(events.newMsg, {
            message,
            nickname: socket.nickname
        });
        if (message === word) {
            superBroadcast(events.newMsg, {
                message: `Winner is ${socket.nickname}, word was: ${word}`,
                nickname: "bot"
            });
            addPoints(socket.id);
        }
    });
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
        }) =>
        broadcast(events.filled, {
            color
        })
    );
}

export default sockeetController;