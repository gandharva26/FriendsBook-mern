const express = require('express');
const app = express();
const mongoose = require('mongoose');
const friendsModel = require('./models/Friends');
const cors = require('cors');
app.use(cors());
app.use(express.json());
//Database connection
mongoose.connect("mongodb://localhost:27017/FriendsDb?readPreference=primary&appname=MongoDB%20Compass&ssl=false", 
{useNewUrlParser : true});



//create a route
//req - sent to server, comes from client, res - response from the server sent to client, 
app.post("/addfriend", async(req, res) => {
    // const friend = new friendsModel({name : "Ellijah", age : 24});
    const name = req.body.name;
    const age = req.body.age;
    const friend = new friendsModel({name : name, age : age});
    await friend.save();
    res.send("inserted data");
}) 

app.get("/read", async(req,res) => {
    friendsModel.find({}, (err, result) => {
        if(err){
            res.send(err)
        }
        else{
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log("You are connected")
})