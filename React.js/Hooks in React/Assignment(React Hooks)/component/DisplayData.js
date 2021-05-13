import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditEmployee from './EditEmployee'

export default function DisplayEmployee() {

    const [load,setLoad] = useState(false);
    const [data,setData] = useState([]);
    const [error,setError] = useState('');
    const [edit,setEdit] = useState(false);
    const [selectedData,setSelectedData] = useState({});
    
    useEffect(()=>{
        axios.get('dataBase.json')
        .then(result =>{
                setData(result.data);
                setLoad(true);            
            }
        )
        .catch(error => {
            setError(error);
            setLoad(true);
        })
    },[])

    const callComponent = (emp) => {
      
        setSelectedData(JSON.stringify(emp)),
        setEdit(true),
        setLoad(false)
        
     }

    const createCard = (emp) => {
        return (
            <div key={emp.id} className='col-md-3 offset-md-1'>
            <div className="card">
                <div className='card-header bg-gradient-light'>   
                    <p className="card-title text-dark"><strong>EmpId:{emp.id}</strong></p>
                </div>
                <div className='card-body'>
                    <div className="card-text">
                    <h3 className="card-title ">{emp.name}</h3>
                    <span><strong>Skill: </strong> {emp.skill}</span>
                    <br/>
                    <span><strong>Mobile No: </strong> {emp.contactNo}</span>
                    <br/>
                    <span><strong>Department: </strong> {emp.department}</span>
                    <br/>
                    </div>
                 </div>
                <div className='card-footer bg-gradient-light'>
                    <button type="button" className="btn btn-primary btn-block" onClick={()=> callComponent(emp)}>Edit</button>
                </div>
                </div>
            </div>
        );
    }


 

    if (load) {
        return (
            <div className='container-fluid'>
                <h1 className='text-center text-primary'>Employee Details</h1>
                <hr />
                <div className='row'>
                        {  
                            error ? 
                            (<h4 className="text-danger">{error}</h4>) :
                            data.map(emp => {return createCard(emp)})
                        }
                </div>
            </div>
        )
    }
    else if (edit) {   
        alert(selectedData) 
        return <EditEmployee key={selectedData.id} selectedData={selectedData} />   
    }
    else {
        return (<h1>
            Loading...
        </h1>)
    }
}
