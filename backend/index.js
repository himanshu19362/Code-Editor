const express = require('express');
const bodyParser = require('body-parser');
const { PORT, DB_URI, CLIENT_URL } = require('./config/serverConfig');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const { updateCode } = require('./services/Room');
const io = new Server(server , {
    cors: {
        origin: CLIENT_URL
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors({
    origin : CLIENT_URL
}));

io.on('connection' , socket => {

    socket.on('join-room' , ({roomId}) => {
        console.log('Join Room' , roomId);
        socket.join(roomId);
    });

    socket.on('update-code' , async ({roomId , code}) => {
        await updateCode(roomId , code);
        io.to(roomId).emit('update-code' , code)
    })
})

app.use('/' , routes);

server.listen(PORT , async () => {
    console.log(`Server running on PORT ${PORT}`)
    await mongoose.connect(DB_URI);
    console.log('Connected to MongoDB');
});
