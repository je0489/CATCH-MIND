import {
    cantPaint,
    canPaint,
    resetCanvas
} from './paint';

const board = document.getElementById("jsPBoard");
const notif = document.getElementById("jsNotifs");

const addPlayers = players => {
    board.innerHTML = "";
    players.forEach(player => {
        const playerElement = document.createElement("span");
        playerElement.innerText = `${player.nickname}: ${player.points}`;
        board.appendChild(playerElement);
    })
}

export const handlePlayerUpdate = ({
    sockets
}) => addPlayers(sockets);

const setNotifyWord = (msg = null) => {
    notif.innerText = "";
    if (msg !== null)
        notif.innerText = msg;
}

export const handleNotifyLeader = ({
    word
}) => {
    canPaint();
    setNotifyWord(`You are the leader, word: ${word}`);
};

export const handleStartedGame = () => {
    cantPaint();
    setNotifyWord();
};

export const handleEndedGame = () => {
    cantPaint();
    resetCanvas();
    setNotifyWord("GAME END");
}