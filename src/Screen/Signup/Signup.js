import React, { useState } from "react";
import "./Signup.css";
import Input from "../../Component/Input";
import SmButton from "../../Component/SmButton";
import ShowPassordInput from "../../Component/ShowPassordInput";
import { Link, useNavigate } from "react-router-dom";
import { Signupfb } from "../../Config/FirebaseConfig/FirebaseMthod";
import { Login } from "@mui/icons-material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Signup() {
  const navigate = useNavigate()
  const [model, setModel] = useState({});
  const SignupofData = () => {
 
    Signupfb(model,`users/${model.bloodRecipter}`)
      .then((RES) => {
        alert("User Creared Succesfully");
        navigate("/login");
      })
      .catch((err) => {
        alert(err)
      });
  };
  return (
    <>
      <div className="Main__coloring">
        <div className="paper shadow">
          <h1 className="Heading__text">Signup</h1>
          <div className="p-2 my-3">
            <Input
              type="text"
              label="UserName"
              onchnage={(e) => {
                setModel({ ...model, UserName: e.target.value });
              }}
            />
          </div>
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
            <Input
              type="text"
              label="Contact No"
              onchnage={(e) => {
                setModel({ ...model, Contact: e.target.value });
              }}
            />
          </div>
          <div className="p-2 my-3">
          <FormControl sx={{ m: 1, width:500,maxWidth:'100%', }}>
        <InputLabel id="demo-simple-select-autowidth-label">Blood</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={(e)=> setModel({ ...model, BloadGroup: e.target.value })}
          autoWidth
          label="Age"
        >
<MenuItem sx={{ m: 1, width:440,maxWidth:'100%' }}  value='0'>Group 0</MenuItem>
<MenuItem sx={{ m: 1, width:440,maxWidth:'100%' }}  value='A'>Group A</MenuItem>
<MenuItem sx={{ m: 1, width:440,maxWidth:'100%' }}  value='B'>Group B</MenuItem>
<MenuItem sx={{ m: 1, width:440,maxWidth:'100%' }}  value='AB'>Group AB</MenuItem>
        </Select>
      </FormControl>
          </div>
          <div className="p-2 my-3">
          <FormControl sx={{ m: 1, width:500,maxWidth:'100%', }}>
        <InputLabel id="demo-simple-select-autowidth-label">Blooad</InputLabel>
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
            <SmButton label="Signup" onClick={SignupofData} />
          </div>
          <div className="p-2 my-3">
            <Link to="/login">I Have Already Created your Acount</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
