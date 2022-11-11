import React, { useContext, useEffect, useState } from 'react';
import './ServiceDetails.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import useTitle from './../../../hooks/useTitle';

const ServiceDetails = () => {    
    const [reviews, setReviews] = useState([]);
    const service = useLoaderData();    
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Service-details');

    useEffect(()=> {
        fetch(`https://11-edu-expert-server.vercel.app/reviews/${service[0]._id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(err => console.error('my_fetch_error: ', err));

    } ,[])
    // console.log(reviews);

    const handleSubmit = event => {
        event.preventDefault(); 
        const body = event.target.review.value;
        const review = {
            service_id: service[0]._id,
            service_name: service[0].name,
            email: user.email,
            name: user.displayName,
            photoURL: user.photoURL,
            body: body
        }                

        fetch('https://11-edu-expert-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },            
            body: JSON.stringify(review),
        })
        .then(res => res.json())
        .then(data => {            
            if(data.acknowledged){
                // alert('Review added successfully');
                toast('Review added successfully.', {position: toast.POSITION.TOP_CENTER});                                                         
                event.target.reset();
                const remainingReviews = [...reviews, review];
                setReviews(remainingReviews);
                // setUser({});
            }
        })
        .catch(error => console.error('my_fetch_error: ', error));
    }

    const goToLogIn = () => {
        navigate('/login');
    }

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
           <div className='review-container'>
                <h3 className='text-center'><b>Service Review</b> </h3>    
                <p className='text-center mb-3 fs-6'>(Total reviews: {reviews.length})</p>                 

                {
                    user?.uid ? 

                    <form onSubmit={handleSubmit} className='d-flex align-items-center'>                    
                        {/* <textarea  className='my-text-area' defaultValue={''} name="review" id="" cols="80" rows="2" placeholder='Add a review' required> </textarea> */}
                        <input className='my-text-area' type="text" name="review" id="" placeholder='Add a review' required />
                        <button className="btn btn-outline-primary btn-sm px-4" type="submit"> Submit </button>
                    </form>                    
                    :
                    <div>
                        <p className='text-center mb-4 mt-4'>
                            <button onClick={goToLogIn} className="btn btn-outline-primary px-4"> Log in to add a review </button>
                        </p>
                    </div>
                }

                {
                    reviews.map(review => 
                    <div className='d-flex' key={review._id}>
                        <img src={review.photoURL} alt="" />
                        <div className='review-body'>
                            <p><b>{review.name}</b></p>
                            <p>{review.body}</p>
                        </div>
                    </div>
                    )
                }
           </div>

        </div>
    );
};

export default ServiceDetails;