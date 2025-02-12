Real-Time Chat Application
This is a real-time chat application that supports chat rooms and private messaging. The app uses Socket.IO for real-time communication and Express.js for the back-end API.

Features
Chat Rooms: Users can join and leave predefined chat rooms.
Private Messaging: Users can send private messages to each other.
Message History: Displays the message history in chat rooms and private messages between users.
Logout: Users can log out from the chat, disconnecting from the server.
Installation
Prerequisites
Node.js - The runtime for JavaScript.
npm - The package manager for Node.js.
Steps to Run Locally
Clone the repository:

bash

git clone <repository_url>
cd <project_directory>
Install dependencies:

Run the following command to install the required packages:

bash

npm install
Run the server:

Start the application by running:

bash

npm start
The server will be available at http://localhost:3002.

Access the chat:

Open the chat.html file in your browser to start using the chat rooms and private messaging features.

Front-End (chat.html)
The front-end of the chat application is built in HTML, with a simple UI to join chat rooms, send messages to a room, send private messages, and logout.

Features
Join Chat Room: Select a room and click "Join Chat Room" to join.
Send Message: Type a message and click "Send Message to the Room" to send a message to all users in the room.
Private Messages: Send a private message to a specific user by selecting the user and typing the message.
Logout: Click "Logout" to disconnect from the chat, clearing your session and stopping real-time communication.
Back-End (Server)
The server is built using Express.js and Socket.IO for real-time communication.

Routes
POST /sendPrivate: Send a private message to a user.

Request body: { "from_user": "user1", "to_user": "user2", "message": "Hello!" }
Response: { "message": "Private message sent successfully", "data": { ...message details } }
GET /history/:from_user/:to_user: Retrieve the message history between two users.

Response: { "messages": [...] }
Socket.IO Events:

join_room: Join a specified chat room.
leave_room: Leave a specified chat room.
room_message: Send a message to a specific chat room.
disconnect: Triggered when a user logs out (disconnects from the server).
Usage
Joining a Chat Room
Select a chat room (e.g., Full Stack Development, Machine Learning, etc.) by checking the corresponding radio button.
Click Join Chat Room to enter the room.
Sending Messages
Type a message in the text field.
Click Send Message to the Room to send your message to all users in the selected chat room.
Private Messaging
You can also send private messages to users (this feature may need further adjustments based on your setup).
Private messages are stored in a MongoDB database and can be retrieved using the /history/:from_user/:to_user endpoint.
Logging Out
Click Logout to disconnect from the current session, which will also clear the Socket ID displayed on the screen.
Development
Structure
/models/privateMessage.js: Mongoose model for private messages.
/routes/privateMessage.js: Defines routes for sending and retrieving private messages.
/server.js: Main server file to start the application with Express and Socket.IO.
/chat.html: Front-end HTML file for the chat UI.

