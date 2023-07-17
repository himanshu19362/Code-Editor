const express = require('express');
const roomRoutes = require('./room');
const router = express.Router();

router.use('/room' , roomRoutes);

module.exports = router;
