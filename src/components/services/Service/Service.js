import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const my_navigate = useNavigate();  

    const showServiceDetails = () => {                
        my_navigate(`/service/${service._id}`);
    }

    return (
        <div className='service'>
            <img src={service.logo} alt="imaage not found" />
            <h3>{service.name}</h3>
            <h6>Details: {1}</h6>
            <button onClick={showServiceDetails}>Show Details</button>          
        </div>
    );
};

export default Service;