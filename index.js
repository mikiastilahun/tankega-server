const app = require('express')()
const server = require('http').Server(app)

const io = require('socket.io')(server);
const p2p = require('socket.io-p2p-server').Server;
io.use(p2p);

app.get('/', (req,res)=>{
    res.json("the ec2 is working")
})

server.listen(3000, () => {
    console.log("the app is running")
})

