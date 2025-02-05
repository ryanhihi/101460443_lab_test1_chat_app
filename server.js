const express = require('express');
const socketio = require('socket.io');
 

//Databse connection
const mongoose = require('./config/db'); //sucessfully





const app = express();
const SERVER_PORT = 3002;

//connect to the chat server
const server = app.listen(SERVER_PORT, () => {
    console.log(`Chat server is running on http:localhost:${SERVER_PORT}/`);
})


//routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/chat.html')
})

app.get("/chatrooms", (req, res) => {
    res.sendFile(__dirname + '/views/chatRooms.html')
})

const io = socketio(server);
