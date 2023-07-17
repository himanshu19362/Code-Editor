const express = require('express');
const RoomController = require('../controllers/Room');
const router = express.Router();

const roomController = new RoomController();

router.post('/' , roomController.create);
router.get('/:roomId' , roomController.findByRoomId);
router.patch('/:roomId' , roomController.updateCode);
router.delete('/:roomId' , roomController.removeByRoomId);

module.exports = router;

