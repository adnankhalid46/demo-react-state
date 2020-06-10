import React, {useState} from 'react';

function Room() {
  let [isLit, setLit] = useState(false);
  let [age,setage] = useState(23);
  
   // these functions are implemented in an alternative ways below
  //function updateLit(){
  //      console.log("Button Clicked");
  //      setLit(!isLit)
 // }

  //function increaseage(){
   // console.log("Increase Age");
  // setage(++age)

  //}

  return (
    <div>
      This is room component {isLit? 'lit' : 'dark'}
      <br/>
        Age= {age}
      <br/>
      <button onClick={()=>setLit(!isLit)} >Toggle Light</button>
      <br/>
      <button onClick={()=>setage(++age)} >Increase Age</button>
    </div>
  );
}

export default Room;
