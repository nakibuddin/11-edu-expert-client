import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const services = useLoaderData();    

    return (
        <div>
            <br/><br/>

            <div className="services">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

            <br/><br/><br/>
        </div>
    );
};

export default Services;