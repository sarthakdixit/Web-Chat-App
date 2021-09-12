// Import dependencies
const express = require('express');
const cors = require('cors');
const socketio = require("socket.io");
const http = require("http");

// // Models
const UserModel = require('./models/User')
const ChatModel = require('./models/Chat')
const RoomModel = require('./models/Room')

// // Association
// UserModel.hasMany(RoomModel)
// RoomModel.belongsTo(UserModel)
ChatModel.belongsTo(UserModel, {foreignKey:'sender', onDelete:'cascade', onUpdate:'cascade'})
ChatModel.belongsTo(RoomModel, {foreignKey:'roomName', onDelete:'cascade', onUpdate:'cascade'})

// Import database config
const db = require('./config/database');

// Import routes
const auth_routes = require('./routes/Auth');
const room_routes = require('./routes/Room');
const chat_routes = require('./routes/Chat');
const User = require('./models/User');

// Config
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Database connection
db.authenticate().then(res => console.log('Connection to database has been established successfully.')).catch(err => console.error('Unable to connect to the database:', err))

// Routes
app.use('/auth', auth_routes);
app.use('/room', room_routes);
app.use('/chat', chat_routes);

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log("We have a new connection");

    socket.on("sendMessage", ({roomName, obj}) => {
        socket.broadcast.emit(roomName, obj);
    });

    socket.on("disconnect", () => {
        console.log("User has left");
    });
});

server.listen(PORT, console.log(`Server started on port ${PORT}`));