const Room = require('../models/rooms.model');

exports.findAll = function(req, res) {
    console.log("Find all rooms");

    Room.find({}, (err, results) => {
        if (err) {
            res.status(400).json({ status: false, data: err });
            console.log('Problem in reading rooms', err);
        } else {
            res.status(200).json({ status: true, data: results });
            console.log('Success in reading rooms');
        }
    });
};

exports.findOne = function(req, res) {
    const roomNumber = req.params.room;

    console.log("Find room with number", roomNumber);

    Room.findOne({ roomNumber: roomNumber }, (err, result) => {
        if (err) {
            res.status(400).json({ status: false, data: err });
            console.log(`Problem in finding room with number ${roomNumber}`);
        } else {
            res.status(200).json({ status: true, data: result });
            console.log('Success in finding room with number', roomNumber);
        }
    });
};

exports.create = function(req, res) {
    const newRoom = new Room({
        roomNumber: req.body.roomNumber,
        beds: req.body.beds,
        price: req.body.price,
    });

    console.log('Insert room with number', req.body.roomNumber);

    newRoom.save((err, result) => {
        if (err) {
            res.status(400).json({ status: false, data: err });
            console.log('Problem in creating room', err);
        } else {
            res.status(200).json({ status: true, data: result });
            console.log('Success in creating room');
        }
    });
};

exports.update = function(req, res) {
    const roomNumber = req.body.roomNumber;

    const updateRoom = {
        beds: req.body.beds,
        price: req.body.price,
    };

    Room.findOneAndUpdate({ roomNumber: roomNumber }, updateRoom, { new: true }, (err, result) => {
        if (err) {
            res.status(400).json({ status: false, data: err });
            console.log('Problem in updating room', err);
        } else {
            res.status(200).json({ status: true, data: result });
            console.log('Success in updating room');
        }
    });
};

exports.delete = function(req, res) {
    const roomNumber = req.params.room;

    console.log("Delete room with number", roomNumber);

    Room.findOneAndDelete({ roomNumber: roomNumber }, (err, result) => {
        if (err) {
            res.status(400).json({ status: false, data: err });
            console.log('Problem in deleting room', err);
        } else {
            res.status(200).json({ status: true, data: result });
            console.log('Success in deleting room');
        }
    });
};