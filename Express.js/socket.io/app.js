const express=require("express");
const app=express();
const http=require("http").createServer(app);
const io=require("socket.io")(http);
const path = require("path");

app.use(express.static(__dirname+"/public"))

app.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname +'/public/index.html'));
    
})

http.listen(3000,()=>{
    console.log("Server started at 3000")
})
var users = {};

io.sockets.on("connection", function(socket){
    
    // React
    socket.on("rRoom", function(rRoom,name){
        users[socket.id]=name;
        socket.join(rRoom);
        socket.broadcast.in(rRoom).emit("new react", users[socket.id] + " new react user has joined");
    });

    socket.on("react new message", function(data,callback){
        io.sockets.in("reactRoom").emit('react news', {user:users[socket.id],data});
        callback("react message delivered successfully")
    });

    // Angular
    socket.on("aRoom", function(aRoom,name){
        users[socket.id]=name;
        socket.join(aRoom);
        socket.broadcast.in(aRoom).emit("new angular", users[socket.id] + " new angular user has joined");
    });

    socket.on("angular new message", function(data,callback){
        io.sockets.in("angularRoom").emit('angular news', {user:users[socket.id],data});
        callback("angular message delivered successfully")
    });
   
    socket.on("disconnect",()=>{
        console.log(users[socket.id]+" with :"+socket.id+"   is diconnected");
    })
    
    socket.on("leaveRoom",(data)=>{
        socket.leave(data+"Room");
        console.log("left the room"+data)
    })
});
