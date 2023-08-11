const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

// router.get('/findAll', employeeController.findAll);
router.get('/findOne/:surname', employeeController.findOne);
router.post('/create', employeeController.create);
router.patch('/update', employeeController.update);
router.delete('/delete/:surname', employeeController.delete);

module.exports = router;