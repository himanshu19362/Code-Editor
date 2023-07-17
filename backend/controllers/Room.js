const RoomService = require("../services/Room");
const { StatusCodes } = require('http-status-codes');

class RoomController{
    constructor(){
        
    }

    async create(req , res){
        try {
            const room = await RoomService.create();            
            return res.status(StatusCodes.CREATED).json({
                success : true , 
                room , 
                message : 'Room created successfully'
            })
        } catch (error) {
            console.log(error.message)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success : false , 
                err : error
            })
        }
    }

    async findByRoomId(req , res){
        try {
            const roomId = req.params.roomId;
            const room = await RoomService.findByRoomId(roomId);
            return res.status(StatusCodes.OK).json({
                success : true , 
                room , 
                message : 'Room found'
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success : false , 
                err : error
            })
        }
    }

    async removeByRoomId(req , res){
        try {
            const roomId = req.params.roomId;
            const room = await RoomService.removeByRoomId(roomId);
            return res.status(StatusCodes.OK).json({
                success : true , 
                room ,
                message : 'Room removed'
            })

        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success : false , 
                err : error
            })
        }
    }

    async updateCode(req , res){
        try {
            const roomId = req.params.roomId;
            const code = req.body.code;
            await RoomService.updateCode(roomId , code);
            return res.status(StatusCodes.OK).json({
                success : true , 
                message : 'Code updated'
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success : false , 
                err : error
            })
        }
    }

    
}

module.exports = RoomController;