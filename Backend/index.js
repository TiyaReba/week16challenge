const express  = require("express");
const cors = require('cors');
const EmployeeData = require('./src/model/model');
const bodyparser = require('body-parser');
const app = new express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(cors());
app.use(bodyparser.json());
app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin",'*');
    res.header("Access-Control-Allow-method:GET,POST,PUT,DELETE");
    console.log("this is");
    console.log("name:" +req.body.employeename)
    console.log("position:" +req.body.position,)
    console.log("office:" +req.body.officelocation,)
    console.log(req.body)

    if (req.body.employeename === undefined)
        res.status(500).send("Name is not present");

    var employee ={
        name:req.body.employeename,
        position:req.body.position,
        office:req.body.officelocation,
        salary:req.body.salary    
    }

    try{
        var employees = new EmployeeData(employee)
        employees.save();
        res.json(employees);
    }catch(err){
       res.send('Error' + err)
    }
})
app.listen(3000, function(){
    console.log('listening to port 3000');
});