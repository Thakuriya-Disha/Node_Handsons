const express = require('express');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {

    socket.on('chat_message', (data) => {
        
        const { userId, msg } = data;
        
        console.log(`${userId} send ${msg}`);

        const newMessage = `${userId} : ${msg}`;
        
        io.emit('chat_message', newMessage);
    })
});

http.listen(8080, () => {
    console.log('server is running on 8080');
})
