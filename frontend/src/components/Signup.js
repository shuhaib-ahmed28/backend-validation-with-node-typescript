import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const[data,setData ]=useState({
        name:"",
        email:"",
        password:""
    })

    const registerUser=(e)=>{
        e.preventDefault()  
        axios.post('http://localhost:8000/signup', data)  
    }
    return (
        <div>
            <h1>Signup page</h1>
            <form action="" onSubmit={registerUser}  >
                <input type="text"  placeholder='Enter Your Name' value={data.name} onChange={(e)=>setData({...data,name: e.target.value})}/>
                <input type="text" placeholder='Email'  value={data.email} onChange={(e)=>setData({...data,email: e.target.value})}/>
                <input type="text"  placeholder='Password' value={data.password} onChange={(e)=>setData({...data,password: e.target.value})}/>
                <button type='submit'>Submit</button>

            </form>
        </div>
    );
};

export default Signup;