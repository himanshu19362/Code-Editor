const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomId : {
        type : String , 
    } , 
    code : {
        type : String , 
        default : '//comments'
    }
} , {timestamps : true});

const Room = mongoose.model('Room' , roomSchema);

module.exports = Room;