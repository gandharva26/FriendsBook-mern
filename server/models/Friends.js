const mongoose = require('mongoose');
const friendsSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    description:{
        type:String,
        required:false
    }

});
const friendsModel = mongoose.model('Friends', friendsSchema);
module.exports = friendsModel;