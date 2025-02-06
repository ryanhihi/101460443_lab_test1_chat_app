const express = require('express');
const socketio = require('socket.io');
const app = express();
const SERVER_PORT = 3002;

//Databse connection
const mongoose = require('./config/db'); //sucessfully

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express. static('views'));

//http://localhost:3002/
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//Routes 

const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
const privateMessageRoutes = require('./routes/privateMessage');
const groupMessageRoutes = require('./routes/groupMessage');
const chatRoomRoutes = require('./routes/chatRoom');



//routes
app.use('/api/signup', signupRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/privateMessage', privateMessageRoutes);
app.use('/api/groupMessage', groupMessageRoutes);
app.use('/api/chatRooms', chatRoomRoutes);

//connect to the chat server
const server = app.listen(SERVER_PORT, () => {
    console.log(`Chat server is running on http:localhost:${SERVER_PORT}/`);
})

//Connect socket
const io = socketio(server);

//Websocket setup
io.on('connection', (socket) => {
    console.log(`New user connected with socketId: ${socket.id}`);
    
    socket.on('disconnect', () => {
        console.log(`User disconnected with socket id: ${socket.id}`);
    });

    socket.on('message', (data) => {
        console.log(`Message from ${socket.id}: ${data}`);
    });

    //Message in message room
    socket.on('room_message', (data) => {
        io.emit('room_message', data)
    });

    //Setting typing indicator
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });

});








