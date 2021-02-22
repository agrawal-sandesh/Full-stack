/*
    Import required modules
*/

let user = {}

user.setupDB = async () => {
    /*
        - Create model instance by invoking getCollection method of connection.js
        - Delete all the data in collection in db
        - Insert the new set of data into the collection
        - If successfully inserted return the number of document inserted
        - Else return null
    */

}
user.insertEmp = async (employeeObj) => {
    /*
        - Create model instance by invoking getCollection method of connection.js
        - Insert the employee object into the employee collection using model
        - On successfull insertion return true
        - Else return false
    */

}

user.updateSkills = async (empId, skill) => {
    /*
        - Create model instance by invoking getCollection method method of connection.js
        - Add skills to the employee collection for given employee id using the model instance
        - On successfull update return the updated skill
        - Else return null
    */

}

user.removeEmp = async (empId) => {
    /*
        - Create model instance by invoking getCollection method of connection.js
        - Delete the employee details of the given employee Id from employee collection
        - On successfull deletion return empId
        - Else return false
    */


}

//Export user object as module
