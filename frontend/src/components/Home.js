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
            <div style={{display:'flex', justifyContent:'center'}}>
              {
                product.map((val)=>{
                    return(
                        <div className='parentcard'>
                            <div className="cardstructure">
                                <div className="outer">
                                    <img src={val.img} alt="" />
                                </div>
                                <div className="inner">
                                    <img src={val.overlayimg} alt="" />
                                </div>
                                <div className="name">
                                    <p>{val.name}</p>
                                </div>
                                <div className="price">Rs.{val.price}</div>
                            </div>
                        </div>
                    )
                })
              }
            </div>
        </div>
    );
};

export default Home;