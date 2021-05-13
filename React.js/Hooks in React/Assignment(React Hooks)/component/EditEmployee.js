import React , { useState}from 'react';
import axios from 'axios';

function EditEmployee(props) {
    const [name,setName] = useState(props.selectedData.name);
    const [skill,setSkill] = useState(props.selectedData.skill);
    const [contactNo,setContactNo] = useState(props.selectedData.contactNo);
    const [department,setDepartment] = useState(props.selectedData.department);
  
    const updateDetails = (e)=>{
        var formJSON = {
            id:props.selectedData.id,
            name: name,
            skill: skill,
            contactNo: contactNo,
            department: department
          };
          axios
            .put('dataBase.json', formJSON)
            .then(response => {
             alert('Data Updated, Kindly check')
            })
            .catch(error => {
              if (error.response) {
                console.log({ error: error.response.data.message });
              }
            });

    }

    return (
        <div className='container-fluid'>
            <h1 className='text-center display-4'>Edit Details for ID: &nbsp;{props.selectedData.id}</h1>
            <hr/>
            <div className='row'>
                <div className='col-md-4 offset-md-4'>
                    <form>
                        <div className="form-group bg-gradient-light">
                        <label>Name:</label>
                        <input
                        className="form-control"
                        value={name}
                        />
                        </div>
          
                        <div className="form-group">
                        <label>Skill:</label>
                        <input
                        className="form-control"
                        value={skill}
                        onChange={()=>{setSkill(skill)}}
                        />
                        </div>
                        <div className="form-group">
                        <label>Mobile No:</label>
                        <input
                        className="form-control"
                        value={contactNo}
                        onChange={setContactNo(contactNo)}
                        />
                        </div>
                        <div className="form-group">
                        <label>Department:</label>
                        <input
                        className="form-control"
                        value={department}
                        onChange={setDepartment(department)}
                        />
                        </div>
                        <button
                        type="button"
                        onClick={updateDetails}
                        className="btn btn-success btn-block"
                        >
                        Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditEmployee
