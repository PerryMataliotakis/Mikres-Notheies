const express = require('express');
const router = express.Router();

const userController = require("../controllers/user.controller");
router.get('/findAll', userController.findAll);
router.get('/findOne/:surname', userController.findOne);
router.post('/create', userController.create);
router.patch('/update', userController.update);
router.delete('/delete/:surname', userController.delete);

module.exports = router;