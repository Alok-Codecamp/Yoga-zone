import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Home.css'
import HomeCard from './HomeCard';
import Slider from './Slider';

const Home = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
      fetch('./myData.json')
      .then(res=>res.json())
      .then(data=>setData(data))
    },[])
      const sliceData=data.slice(0,4);
    return (
        <div className="">
            <Slider className="slider"></Slider>
           <div className="my-5 mx-5 ">
           <Row xs={1} md={2} lg={4} className="g-4">
      
           {
               sliceData.map(data=><Col>
               <HomeCard 
               key={data.id}
               data={data}
               ></HomeCard>
               </Col>)
           }
           </Row>
           </div>
           <div className="pricing">
            
           </div>
        </div>
    );
};

export default Home;