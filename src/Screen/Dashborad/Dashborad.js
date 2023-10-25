import React, { useEffect, useState } from "react";
import { FbDataSend, GetData, fbLogout } from "../../Config/FirebaseConfig/FirebaseMthod";
import { useNavigate } from "react-router-dom";

function Dashborad() {
  const [model,setModel] = useState([]);
  const navigator = useNavigate()
  const NoData = ()=>{
    fbLogout().then(()=>{
      navigator('/login')
    }).catch((err)=>{
      console.log(err)
    })
  }
  const data = ()=>{
    GetData('users/Accepter').then((res)=>{
      const arr = []
      Object.keys(res).map((key) => {
        arr.push(res[key])
      })
      console.log("Keys", Object.keys(res))
      setModel(arr);
    }).catch((err)=>console.log(err))
  }
  useEffect((()=>{
    data()
  }),[])
  console.log(model)
  return<div className="container">
  <table border={1}>
      <tr>
          <th>
              Name
          </th>
          <th>
              Email
          </th>
      
          <th>
              Categrois
          </th>
      </tr>
   
        {model.map((e)=>{
          return <>
          <tr>
          <td>{e.UserName}</td>
          <td>{e.Email}</td>
          <td>{e.bloodRecipter}</td>
          </tr>
          </>
        })}
     
  </table>
  <button onClick={()=>{
      fbLogout().then((re)=>{
        navigator('/login')
      })
  }} >Logout</button>
  </div>

};

export default Dashborad;
