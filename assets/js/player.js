import {
    enableCanvas,
    disableCanvas,
    showControls,
    hideControls,
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
    enableCanvas();
    showControls();
    setNotifyWord(`You are the leader, word: ${word}`);
};

export const handleStartedGame = () => {
    disableCanvas();
    hideControls();
    setNotifyWord();
};

export const handleEndedGame = () => {
    disableCanvas();
    hideControls();
    setNotifyWord("GAME END");
    resetCanvas();
}