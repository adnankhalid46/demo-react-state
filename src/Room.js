import React, {useState} from 'react';

function Room() {
  let [isLit, setLit] = useState(false);
  let [age,setage] = useState(23);
  function updateLit(){
        console.log("Button Clicked");
        setLit(!isLit)
  }

  function increaseage(){
    console.log("Increase Age");
    setage(++age)

  }

  return (
    <div>
      This is room component {isLit? 'lit' : 'dark'}
      <br/>
        Age= {age}
      <br/>
      <button onClick={updateLit} >Toggle Light</button>
      <br/>
      <button onClick={increaseage} >Increase Age</button>
    </div>
  );
}

export default Room;
