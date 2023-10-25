import { useEffect, useState } from "react"
import { GetData, fbLogout } from "../../Config/FirebaseConfig/FirebaseMthod"
import { useNavigate } from "react-router-dom"

export default function SecondApp (){
    const [model,setModel] = useState([])
    const data = ()=>{
        GetData('users/Donater').then((res)=>{
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
      const navigate = useNavigate()
    return <>
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
        <tr>
          {model.map((e)=>{
            return <>
            <td>{e.UserName}</td>
            <td>{e.Email}</td>
            <td>{e.bloodRecipter}</td>

            </>

          })}
        </tr>
    </table>
    <button onClick={()=>{
        fbLogout().then((re)=>{
            navigate('/login')
        })
    }} >Logout</button>
    </>
}