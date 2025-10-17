import { useEffect, useState } from "react";
import './App.css';
import { FaTrash, FaEdit } from 'react-icons/fa'

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/customers") // adjust path if needed
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
          setUsers(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setUsers([]);
      });
  }, []);
const deleteuser=(id)=>{

  fetch(`/api/deleteuser/${id}`,{
      method: "DELETE",
    });
setUsers(users.filter(user => user.id !== id));
}
const handleEdit=()=>[

]

  return users.length>0?  <>
      <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Salary</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u)=>(
            <tr>
            <td>{u.firstname}</td>
            <td>{u.lastname}</td>
            <td>{u.salary}</td>
            <td>{u.email}</td>
            <FaTrash
            style={{ color: "red", cursor: "pointer" }}
            title="Delete user"
            onClick={()=>deleteuser(u.id)}
            />
                      <FaEdit
            onClick={() => handleEdit(u.id)}
            style={{ color: "blue", cursor: "pointer", marginRight: "10px" }}
            title="Edit user"
          />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>:"No user found";


}
export default Users;