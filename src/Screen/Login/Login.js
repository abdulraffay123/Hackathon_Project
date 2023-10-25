import React, { useState } from "react";
// import "./Signup.css";
import Input from "../../Component/Input";
import SmButton from "../../Component/SmButton";
import ShowPassordInput from "../../Component/ShowPassordInput";
import { Link, useNavigate } from "react-router-dom";
import { Loginfb } from "../../Config/FirebaseConfig/FirebaseMthod";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Login() {
  let navigate = useNavigate();
  const [model, setModel] = useState({});
  const lginofData = () => {
    Loginfb(model,`users/${model.bloodRecipter}`)
      .then((res) => {
            if( res.bloodRecipter === 'Accepter'){
              navigate("/sconddashbaord");
            }else{
              navigate("/");
            }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <div className="Main__coloring">
        <div className="paper shadow">
          <h1 className="Heading__text">login</h1>
          <div className="p-2 my-3">
            <Input
              type="email"
              label="Email"
              onchnage={(e) => {
                setModel({ ...model, Email: e.target.value });
              }}
            />
          </div>
          <div className="p-2 my-3">
            <Input
              label="Password"
              onchnage={(e) => {
                setModel({ ...model, Password: e.target.value });
              }}
            />
          </div>
          <div className="p-2 my-3">
          <FormControl sx={{ m: 1, width:500,maxWidth:'100%', }}>
        <InputLabel id="demo-simple-select-autowidth-label">Blooa</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={(e)=> setModel({ ...model, bloodRecipter: e.target.value })}
          autoWidth
          label="Age"
        >
<MenuItem sx={{ m: 1, width:440,maxWidth:'100%' }}  value='Accepter'>Accepter</MenuItem>
<MenuItem sx={{ m: 1, width:440,maxWidth:'100%' }}  value='Donater'>Donater</MenuItem>

        </Select>
      </FormControl>
          </div>
      
          <div className="p-2 my-3">
            <SmButton label="Login" onClick={lginofData} />
          </div>        
          <div className="p-2 my-3">
            <Link to="/signp">New Created Acount</Link>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Login;
