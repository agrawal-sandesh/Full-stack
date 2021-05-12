import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowCard from './ShowCard'

function GetPostId() {
    const [load,setLoad] = useState(false);
    const [id,setId] = useState(1);
    const [obj,setObj] = useState({});
    const [idFromButton,setIdFromButton] = useState(1);  
    const [errorMessage, setErrorMessage] = useState('');
 
    useEffect(() => {
        callAPI();
    },[idFromButton]);

    const callAPI = ()  => {
        setLoad(false);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(result =>{
            setObj(result.data);
            setLoad(true);
            }
        )
        .catch(error => {
            setErrorMessage(error);
            setLoad(true);
        });
    }
    
    const provideData = (id) => {
        setIdFromButton(id);
    }

    return (
        <div className='container-fluid'>
            <br />
            <div className='row'>
                <div className='col-md-5 offset-md-1'>
                    <form>
                    <input type='number' value={id} onChange={(e) => setId(e.target.value)} /><br/><br/>
                    <button type="button" className="btn btn-success" onClick={()=> provideData(id)}>Get Post</button>
                    </form>
                </div>
                <div className='col-md-5 offset-md-1'>
                    {
                        load? 
                        <ShowCard key={obj.objId} obj={obj} />:
                        <h1>loading..</h1>
                    }
                    {  
                        errorMessage ? 
                        (<h4 className="text-danger">{errorMessage}</h4>) :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default GetPostId;

