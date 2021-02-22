/*
    Import required modules    
*/

routing.get("/setupDB", async (req, res, next) => {
    /*
        - Invoke setupDB method of service/user.js,which returns the number of documents added
        - Send a json response with message "Successfully inserted "+<<number of document>>+" documents into database"
        - In case of any error, It should be passed to next handler
    */
    
})

routing.post("/employees", async (req, res, next) => {
    /*
        - Convert the generic object from request body to employee object using employee class of model/employee.js
        - Invoke insertEmp of service/user.js passing employee object which returns true on succesfull insertion
        - Send a json response with message "Successfully added employee "+<<employee Id>> with a status 201
        - In case of any error, It should be passed to next handler
    */

})

routing.put("/employees/:empId/:skill", async (req, res, next) => {
    /*
        - Retrive the empId and skills from the url and assign them to the variables
        - Invoke updateSkills of service/user.js passing empId and skill to be added which returns updated skill on succesfull updation
        - Send a json response with message "Successfully added "+<<Skill>>+" to "+<<employee Id>> with a status 200
        - In case of any error, It should be passed to next handler
    */ 
})

routing.delete("/employees/:empId", async (req, res, next) => {
    /*
        - Invoke deleteEmp of service/user.js passing empId which returns empId On succesfull deletion
        - Send a json response with message "Successfully removed employee "+<<employee Id>> with a status 200
        - In case of any error, It should be passed to next handler
   */ 

})

//router should be exported as module
