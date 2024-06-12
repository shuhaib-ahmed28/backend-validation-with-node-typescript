import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/login", data).then((res)=>{
      console.log(res);
      if(res.status == 200){
        if(res.data.user){
          toast.success('Login Successful, Welcome ' )
          navigate('/');
        }else{
          toast.error('Enter Valid credentials ') 
      }
      }
    })
  
    

  };

  return (
    <div>
      <h1>Login page</h1>
      <form action="" onSubmit={loginUser}>
        <input
          type="text"
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
