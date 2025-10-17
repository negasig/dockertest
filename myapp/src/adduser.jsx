import { useState } from "react"
import './App.css';
export default function Adduser(){
    const[firstname, setFirstname]=useState("");
    const[lastname, setLastname]=useState("");
    const[salary, setSalary]=useState("");
    const[email, setEmail]=useState("");
  
    const handlesubmit=async(e)=>{
     const response = await fetch("/api/createuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstname,lastname,salary, email }),
  });

  const data = await response.json();
  console.log(data);
    }
return <div className="test">
  <h2>Register User</h2><br/>
<form onSubmit={handlesubmit}>
    <input type="text" name="fname" placeholder="firstname" onChange={(e)=>setFirstname(e.target.value)} style={{padding:'6px', borderRadius:'8px', border:'0.5px solid black', width:'20%', marginBottom:'3px'}} required /><br/>
    <input type="text" name="lname" placeholder="lastname" onChange={(e)=>setLastname(e.target.value)} style={{padding:'6px', borderRadius:'8px', border:'0.5px solid black', width:'20%', marginBottom:'3px'}} required /><br/>
    <input type="text" name="salary" placeholder="Salary" onChange={(e)=>setSalary(e.target.value)} style={{padding:'6px', borderRadius:'8px', border:'0.5px solid black', width:'20%', marginBottom:'3px'}} required /><br/>
    <input type="text" name="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} style={{padding:'6px', borderRadius:'8px', border:'0.5px solid black', width:'20%'}} required/><br/>
    <input type="submit" placeholder="register" style={{padding:'4px', backgroundColor:'#04AA6D', fontSize:'18px', border:'1px solid black', color:'white', borderRadius:'10px'}}  />
</form>
</div>

}