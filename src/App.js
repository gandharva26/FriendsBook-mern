
import './App.css';
import {useState} from 'react'
import Axios from 'axios';
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const addFriend = () => {
    Axios.post("http://localhost:3001/addfriend", {
      name:name,
      age:age
    }).then(() => {
      console.log("it worked")
    }).catch(() => {
      console.log("it failed")
    })
  }
  return (
    <div className="App">
     <div className="inputs">
    Name  <input type = "text" onChange={(event) => {
setName(event.target.value)
    }}/>
      
    Age  <input type = "number" onChange={(event) => {
      setAge(event.target.value)
    }}/>
<button onClick = {addFriend}>
  Add friends
</button>
    
   

    
     </div>
    </div>
  );
}

export default App;
