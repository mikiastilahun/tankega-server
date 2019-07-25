const app = require('express')()
const server = require('http').Server(app)

const io = require('socket.io')(server);
const p2p = require('socket.io-p2p-server').Server;
io.use(p2p);



server.listen(3000, () => {
    console.log("the app is running")
})

