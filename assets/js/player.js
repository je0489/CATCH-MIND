import {
    enableCanvas,
    disableCanvas,
    showControls,
    hideControls
} from './paint';

const board = document.getElementById("jsPBoard");

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

export const handleStartedGame = () => {
    disableCanvas();
    hideControls();
};
export const handleNotifyLeader = ({
    word
}) => {
    enableCanvas();
    showControls();
    console.log("handleNotifyLeader", word)
};