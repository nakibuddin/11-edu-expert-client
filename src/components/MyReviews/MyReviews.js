import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    // console.log(review);
    const  handleDelete = review => {        

        const agree = window.confirm(`Are you sure you want to delete this review ?`);
        if(agree){
            fetch(`http://localhost:5000/reviews/${review._id}`, {
                method: 'delete',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount === 1){                                        
                    toast('Review deleted successfully.', {position: toast.POSITION.TOP_CENTER});                                         
                    const remainingReviews = reviews.filter(usr => usr._id !== review._id);
                    setReviews(remainingReviews);                                       
                }
            })
            .catch(error =>  console.error('my_fetch_delete_error: ', error) );
        }
    }

    return (
        <div>            
            {
                reviews.map(review => 
                <div className='review-container d-flex' key={review._id}>
                    <img src={review.photoURL} alt="" />
                    <div className='review-body'>
                        <p><b>{review.name}</b></p>
                        <p>{review.body}</p>

                        <div className='text-center'>
                            <button onClick={() => handleDelete(review)} className="btn btn-outline-primary btn-sm px-4" type="submit"> Edit </button>                              
                            <button onClick={() => handleDelete(review)} className="btn btn-outline-danger btn-sm ms-4 px-3" type="submit"> Delete </button>                             
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default MyReviews;