import {
    join
} from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import sockeetController from "./socketController";
import events from "./events";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "client")));
app.get("/", (req, res) => res.render("home", {
    events: JSON.stringify(events)
}));

const listening = () => console.log(`http://localhost:${PORT}`);
const server = app.listen(PORT, listening());
const io = socketIO(server);

// 소켓 연결시 실행
io.on("connection", socket => sockeetController(socket));