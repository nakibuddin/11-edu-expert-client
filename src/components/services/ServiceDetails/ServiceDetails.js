import React, { useEffect, useState } from 'react';
import './ServiceDetails.css'
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {    
    const [reviews, setReviews] = useState([]);
    const service = useLoaderData();

    useEffect(()=> {
        fetch(`http://localhost:5000/reviews/${service[0]._id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(err => console.error('my_fetch_error: ', err));

    } ,[])
    // console.log(reviews);

    return (
        <div className='serviceDetails'>
                {/* service details section */}
            <h3 className='text-center mt-5'>Details about: <b>{service[0].name}</b> </h3>                        
            <div className='details d-flex gap-4'>                
                <img src={service[0].logo} alt="imaage not found"/>
                <div>
                    <h5><b>Service name:</b> {service[0].name}</h5>
                    <h5><b>Price:</b> {service[0].price}</h5>
                    <h5><b>Details:</b></h5>
                    <p>{service[0].details}</p>
                </div>
            </div>        

                {/* review section */}
            {
                reviews.map(review => 
                <div className='review-container d-flex' key={review._id}>
                    <img src={review.photoURL} alt="" />
                    <div className='review-body'>
                        <p><b>{review.name}</b></p>
                        <p>{review.body}</p>
                    </div>
                </div>
                )
            }

        </div>
    );
};

export default ServiceDetails;