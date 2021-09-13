const notifications = document.getElementById("jsNotifications");

const alertNotification = (text, color) => {
    const notification = document.createElement("div");

    notification.innerText = text;
    notification.style.backgroundColor = color;
    notifications.appendChild(notification);
}

export const handleNewUser = ({
        nickname
    }) =>
    alertNotification(`${nickname} just joined`, "rgb(88, 86, 214)");

export const hadnleDisconneted = ({
        nickname
    }) =>
    alertNotification(`${nickname} just left`, "rgb(255, 59, 48)");