import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import './MyReviews.css'

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);    
    const {user} = useContext(AuthContext)

    useEffect(()=> {
        fetch(`http://localhost:5000/my-reviews/${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(err => console.error('my_fetch_error: ', err));

    } ,[])
    // console.log(user);

    return (
        <div>
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

export default MyReviews;