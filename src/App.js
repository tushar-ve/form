
import './App.css';
import { useState } from 'react';
function App() {


  const[name,setName]=useState("")
  const[tnc, setTnc]=useState(false)
  const[interest, setInterest]=useState("")



  function getFormData(e){
    e.preventDefault()
    console.log(name,interest, tnc)
  }
  return (
    <div className="App">
      <h1>
        Handle the form using react
      </h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} /> <br/>
        <select onChange={(e)=>setInterest(e.target.value)}>
        <option>Select any one</option>
        <option>Marvel</option>
        <option>DC Comic</option>
        <option>Naruto</option>
        <option>Tokyo Revengers</option>


        </select><br/><br/>
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept Terms & Conditions</span><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div> 
  );
}

export default App;
