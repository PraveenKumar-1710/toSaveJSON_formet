import {useState} from "react";
import './Style.css';
import axios from "axios";



function Details() {
    const[data,setData] = useState({name:"",dob:"",phoneno:""});
function handleChange(event){
    setData({...data,[event.target.name]:event.target.value})
}
function handleClick(event){
  //  event.preventDefault();
    axios.post("http://localhost:4000/Details",data)
    
}
    return (
      <div id="form_container">
        <form onSubmit={handleClick}>
            <p className="label">Name</p>
            <p><input type="text" name="name" value={data.name} onChange={handleChange}/> </p>
            <p className="label">DOB</p>
            <p><input type="date" name="dob" value={data.dob} onChange={handleChange}/> </p>
            <p className="label">Phone</p>
            <p><input type="tel" name="phoneno" value={data.phoneno} onChange={handleChange}/> </p>
            <p><input type="submit" value="Register" /></p>
           

        </form>
      </div>
    );
  }
  
  export default Details;