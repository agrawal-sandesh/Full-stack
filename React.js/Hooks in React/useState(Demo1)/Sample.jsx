import React, {useState} from 'react';
function Sample() {
  const [name,setName] = useState("Jack")
  return (
    <div>
      Your Name is: {name}<br/>
      <button onClick={()=>setName("Jill")}>Change</button>
    </div>
  );
}
export default Sample;
