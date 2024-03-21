import { io } from "../https";

io.on('connection', socket => {
    socket.emit("notify", () => {

    });
})
