import React from 'react';
import { useState, useEffect } from 'react';
const Backendconnect = () => {
    const [data,setData]=useState(null);
    useEffect(()=>{
        fetch('http://localhost:8000/api').then(
            response=> response.json()
        ).then(
            data=> setData(data)
        ).catch(error=>console.error('error while fetching data', error))
    }, []);
    return (
        <div>
            {data? <p> {data.message} </p>:<p> loading....</p>}
        </div>
    );
};

export default Backendconnect;