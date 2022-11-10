import React from 'react';
import './ServiceDetails.css'
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const comments = useLoaderData();

    return (
        <div>
            <br/><br/><br/>


                                                {/* review section */}
            {
                comments.map(cmnt => 
                <div className='cmnt-container d-flex' key={cmnt._id}>
                    <img src={cmnt.photoURL} alt="" />
                    <div className='cmnt-body'>
                        <p><b>{cmnt.name}</b></p>
                        <p>{cmnt.body}</p>
                    </div>
                </div>
                )
            }

        </div>
    );
};

export default ServiceDetails;