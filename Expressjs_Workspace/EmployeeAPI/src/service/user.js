/*
    Import required modules
*/
const dbLayer = require('../model/user');
const validator = require('../utilities/validator')

user = {}
let throwError = (message, status) => {
    let err = new Error(message);
    if (status) err.status = status;
    throw err;

}
user.setupDB = async () => {
    /*
        - Invoke setupDB method of model/user.js, it returns number of document inserted
        - If documents are inserted return the same
        - Else, throw an error using throwError method by passing  message as"Insertion Failed", with status as 500
    */

}

user.insertEmp = async (employeeObj) => {
    /*
        - Invoke validateEmpId of utilities/validator.js by passing empId as parameter
        - Invoke insertEmp method of model/user.js by passing employee object
        - On successfull insertion it returns true, return the same
        - Else throw an error using throwError method by passing  message as "Employee details not added" with  status as 400 
    */

}

user.updateSkills = async (empId, skills) => {
    /*
        - Invoke updateSkills method of model/user.js by passing skills as parameter
        - On successfull updation it returns the updated skill return the same
        - Else throw an error using throwError method by passing  message as "Updation of skill set failed" with the status as 400
    */

}

user.deleteEmp = async (empId) => {
    /*
        - Invoke validateEmpId of utilities/validator.js by passing empId as parameter
        - Invoke deleteEmp method of model/user.js by passing empId as parameter
        - On successfull deletion it returns the empId, return the same
        - Else throw an error using throwError method by passing  message as "Unable to remove "+<<empId>>+" details"
    */
}

//export user object as module
