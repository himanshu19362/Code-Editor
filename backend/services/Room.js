const Room = require("../models/Room");
const {v4 : uuidv4} = require('uuid');


    
    const create = async () => {
        let roomId;
        while(true){
            roomId = uuidv4().substring(0 , 15);
            const roomExist = await Room.findOne({roomId});
            if(!roomExist){
                break;
            }
        }
        const room = await Room.create({roomId});
        return room;
    }

    const findByRoomId = async roomId => {
        try {
            const room = await Room.findOne({roomId});
            return room;
        } catch (error) {
            throw error;
        }
    }

    const removeByRoomId = async roomId => {
        try {
            const room = await Room.deleteOne({roomId});
            return room;
        } catch (error) {
            throw error;
        }
    }

    const updateCode = async (roomId , code) => {
        try {
            const room = await Room.findOne({roomId});
            room.code = code;
            console.log(room.code);
            await room.save();
            
        } catch (error) {
            throw error;
        }
    }


module.exports = {
    create , findByRoomId , removeByRoomId , updateCode
};