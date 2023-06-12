import { useState } from "react"



function SaveData(){
  
const [loggedIn, setLoggedIn]=useState(3)



  return(
    <div>
    {
      loggedIn===1?<h1>
      Rendering the values
      </h1>:loggedIn===2?<h2>Valid again</h2>:<h3>nothing is good</h3>
    }
      
    </div>
    
  )
}
export default SaveData