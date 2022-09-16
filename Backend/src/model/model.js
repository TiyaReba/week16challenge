const mongoose = require("mongoose");
 mongoose.connect('mongodb+srv://tiya:post24@cluster0.qh8z9se.mongodb.net/employeeDetails?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/EmployeePortal');
console.log("Mongo DB connected ...")
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

//  module.exports = connectDB;
