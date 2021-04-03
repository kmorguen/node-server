const path = require('path'); 

const express = require('express')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'front')))

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server online sur le port ${PORT}`))