import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Home = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/')
        .then(products=> setProduct(products.data))
        .catch(error=>console.log(error))
    },[]);

    return (
        <div>
            <h1>Welcome to the our app</h1>
            <div>
              {
                product.map((val)=>{
                    return(
                        <div>
                        <img src={val.img} alt="" />
                        <h2>{val.name}</h2>
                        </div>
                    )
                })
              }
            </div>
        </div>
    );
};

export default Home;