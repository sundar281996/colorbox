import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
  <Colorbox/>
    </div>
  );
}
function Colorbox(){
  const [color, setColor]=useState("skyblue")
  const [colorlist,setColorlist] =useState(["red","blue","orange"])
  const styles={
    fontSize:"24px",
    backgroundColor:color
  }
  return(
   <div>
   <div className='sun'>
    <input onChange={(event)=>setColor(event.target.value)} style={styles} value={color} type="text"></input>
    <button onClick={()=>setColorlist([...colorlist,color])}>add color</button>

  
    </div>
    {colorlist.map((clr)=> <Addcolor color={clr} />
    )}
    </div>
  )
}
function Addcolor({color}){
  const styles={
    backgroundColor:color,
    height:"35px",
    width:"300px",
    marginTop:"30px"
  }
  return(
    <div style={styles}>
      

    </div>
  )
}

export default App;
