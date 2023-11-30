import React, { useCallback, useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { Mycart } from "../../MainRoter";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";


const User = () => {
  const{valUser, setvalUser}=useContext(Mycart)
  console.log(valUser)
  const userromve=(index)=>{
    const user=[...valUser]
    user.splice(index,1)
    setvalUser(user)


  }
  return (
    <div>
      <table className="table align-middle">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Order Details</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {valUser.map((user,index)=>(
          <tbody>
          <tr>
            <th scope="row">{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            
             <td><Link to={`/admin/user/${index}`}><TbListDetails style={{color:'red',fontSize:"30px"}}/></Link></td>
            
            <td>
              <button
                type="button"
                className="btn btn-link btn-sm px-3"
                data-ripple-color="dark"
              >
                <TiDelete style={{color:'red',fontSize:"30px"}} onClick={()=>userromve(index)}/>

              </button>
            </td>
          </tr>
          
        </tbody>

        ))}
        
      </table>
    </div>
  );
};

export default User;
