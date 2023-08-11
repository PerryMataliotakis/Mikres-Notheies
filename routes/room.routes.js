const express = require('express');
const router = express.Router();

const roomController = require('../controllers/room.controller');

router.get('/findAll', roomController.findAll);
router.get('/findOne/:roomnumber', roomController.findOne);
router.post('/create', roomController.create);
router.patch('/update', roomController.update);
router.delete('/delete/:roomnumber', roomController.delete);

module.exports = router;