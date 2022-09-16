const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/EmployeePortal');

var employeeDetails = new mongoose.Schema({
    // id: {
    //     type: String,
    // },
    name: {
        type: String,
    },
    position: {
        type: String,
    },
    office: {
        type: String,
    },
    salary: {
        type: Number,
    },

});

module.exports = mongoose.model("employee", employeeDetails);
