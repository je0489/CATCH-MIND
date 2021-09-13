import {
    handleNewUser,
    hadnleDisconneted
} from './notification';
import {
    handleNewMessage
} from './chat';

let socket = null;

export const getSocket = () => socket;

export const updateSocket = aSocket => socket = aSocket;

export const initSockets = aSocket => {
    const {
        events: {
            newUser,
            disconnected,
            newMsg
        }
    } = window;
    updateSocket(aSocket);
    aSocket.on(newUser, handleNewUser);
    aSocket.on(disconnected, hadnleDisconneted);
    aSocket.on(newMsg, handleNewMessage);
}