import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css'
import img from './notFound.jpg'
const NotFound = () => {
    const history=useHistory();
    const handleBackToHome=()=>{
            history.push('/home')
    }
    return (
        <div className="notFound">
            <img src={img} alt="" className="w-100" />
            <button onClick={handleBackToHome} className="btn-backHome px-4 py-2" >Back to home</button>
        </div>
    );
};

export default NotFound;