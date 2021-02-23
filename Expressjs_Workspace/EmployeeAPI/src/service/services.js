const dbLayer = require('../model/dbLayer');
const validator = require('../utilities/validator')

let service = {}

// let throwError = (message, status) => {
//     let err = new Error(message);
//     if (status) err.status = status;
//     throw err;

// }

service.setupDB = async() => {
    let data = await dbLayer.setupDB();
    if (data) {
        return data;
    } else {
        let err = new Error("Data not inserted properly");
        err.status = 500;
        throw new Error;
    }
}


service.insertEmp = async(employeeObj) => {
    /*
        - Invoke validateEmpId of utilities/validator.js by passing empId as parameter
        - Invoke insertEmp method of model/user.js by passing employee object
        - On successfull insertion it returns true, return the same
        - Else throw an error using throwError method by passing  message as "Employee details not added" with  status as 400 
    */
    validator.validateEmpId(employeeObj.empNo);
    let data = await dbLayer.insertEmp(employeeObj)
    if (data && data.length > 0) {
        return data
    } else {
        let err = new Error("Employee details not added");
        err.status = 400
        throw err
    }
}


service.updateSkills = async(empId, skills) => {
    /*
        - Invoke updateSkills method of model/user.js by passing skills as parameter
        - On successfull updation it returns the updated skill return the same
        - Else throw an error using throwError method by passing  message as "Updation of skill set failed" with the status as 400
    */

}

service.deleteEmp = async(empId) => {
    /*
        - Invoke validateEmpId of utilities/validator.js by passing empId as parameter
        - Invoke deleteEmp method of model/user.js by passing empId as parameter
        - On successfull deletion it returns the empId, return the same
        - Else throw an error using throwError method by passing  message as "Unable to remove "+<<empId>>+" details"
    */
}

module.exports = service;