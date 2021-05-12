import React from 'react';
function ShowCard(props) {
    return (
        <div className='card bg-dark text-white'>
            <div className='card-header'>
               
          <p className="card-title display-4">PostId:{props.obj.id}</p>
        </div>
            <div className='card-body'>
               
                <p className="card-text">
            <span><strong>Title: </strong> {props.obj.title}</span>
            <br/><br/>
            <span><strong>Details: </strong> {props.obj.body}</span>
            <br
            />
            </p>
            </div>
            </div>
            
    )
}
export default ShowCard;