import {
    handleNewUser,
    hadnleDisconneted
} from './notification';
import {
    handleNewMessage
} from './chat';
import {
    handleBeganPath,
    handleStrokedPath,
    handleFilled
} from './paint';

let socket = null;

export const getSocket = () => socket;

export const initSockets = aSocket => {
    const {
        events: {
            newUser,
            disconnected,
            newMsg,
            beganPath,
            strokedPath,
            filled
        }
    } = window;
    socket = aSocket;
    socket.on(newUser, handleNewUser);
    socket.on(disconnected, hadnleDisconneted);
    socket.on(newMsg, handleNewMessage);
    socket.on(beganPath, handleBeganPath);
    socket.on(strokedPath, handleStrokedPath);
    socket.on(filled, handleFilled);
}