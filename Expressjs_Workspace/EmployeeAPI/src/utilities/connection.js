

const { Schema } = require('mongoose');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
const url = "mongodb://localhost:27017/EmployeeDB"


const employeeSchema = Schema({
    empName: { type: String, required: [true, 'Employee name is required'] },
    empNo: { type: Number, required: [true, 'Employee number is required'], unique: [true, "Id should be unique"] },
    location: { type: String, required: [true, 'Location is required'] },
    joinedDate: { type: Date, required: [true, 'Joining Date is required'], default: new Date() },
    stream: { type: String, required: [true, 'Stream field is required'] },
    technology: { type: Array, required: [true, 'Technology field is required'], default: [] }
}, { collection: "Employee", timestamps: true })


let connection = {}

connection.getCollection = async () => {
    //establish connection and return model as promise
 
}


//export the connection object as module