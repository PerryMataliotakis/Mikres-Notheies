const Employee = require('../models/employees.model');

exports.findOne = function(req, res) {
    const surname = req.params.surname;

    Employee.findOne({ surname: surname }, { _id: 0, name: 1, surname: 1, address: 1, phone: 1, role: 1 }, (err, result) => {
        if (err) {
            res.json({ status: false, data: err });
        } else {
            res.json({ status: true, data: result });
        }
    });
};

exports.create = function(req, res) {
    const name = req.body.name;
    const surname = req.body.surname;
    const address = req.body.address;
    const phone = req.body.phone;
    const role = req.body.role;

    const newEmployee = new Employee({
        name: name,
        surname: surname,
        address: address,
        phone: phone,
        role: role
    });

    newEmployee.save((err, result) => {
        if (err) {
            res.json({ status: false, data: err });
        } else {
            res.json({ status: true, data: result });
        }
    });
};

exports.update = function(req, res) {
    const surname = req.body.surname;
    const role = req.body.role;

    Employee.updateOne({ surname: surname }, { $set: { role: role } }, (err, result) => {
        if (err) {
            res.json({ status: false, data: err });
        } else {
            res.json({ status: true, data: result });
        }
    });
};

exports.delete = function(req, res) {
    const surname = req.params.surname;

    Employee.deleteOne({ surname: surname }, (err, result) => {
        if (err) {
            res.json({ status: false, data: err });
        } else {
            res.json({ status: true, data: result });
        }
    });
};

exports.stats1 = function(req, res) {
    const surname = req.params.surname;

    Employee.aggregate([
        {
            $match: { surname: surname }
        },
        {
            $project: {
                _id: 1,
                name: 1,
                surname: 1,
                address: 1,
                phone: 1,
                role: 1
            }
        }
    ], (err, result) => {
        if (err) {
            res.json({ status: false, data: err });
        } else {
            res.json({ status: true, data: result });
        }
    });
};