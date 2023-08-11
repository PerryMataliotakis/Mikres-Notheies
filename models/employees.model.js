const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

let employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max: 100,
    },
    surname: {
      type: String,
      required: true,
      max: 100,
      unique: true,
    },
    address: {
      type: String,
      max: 100,
    },
    phone: {
      type: String,
      max: 100,
    },
    role: {
      type: String,
      required: true,
      max: 100,
    },
  },
  {
    collection: 'employees',
    timestamps: true,
  }
);

employeeSchema.plugin(uniqueValidator);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;