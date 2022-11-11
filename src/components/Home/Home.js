import React from 'react';
import './Home.css';
import MyCarousel from './../MyCarousel/MyCarousel';
import Footer from './../Footer/Footer';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Service from '../services/Service/Service';
import useTitle from './../../hooks/useTitle';

const Home = () => {
    const services = useLoaderData();
    const navigate = useNavigate();
    useTitle('Home');

    const goToLogIn = () => {
        navigate('/services');
    }

    return (
        <div>
            {/* <br/> <br/> */}
            <div className="services">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

            <p className='text-center mb-4 mt-4'>
                <button onClick={goToLogIn} className="btn btn-outline-primary px-4"> Explore more </button>
            </p>


            {/* <Footer></Footer> */}
            {/* <MyCarousel></MyCarousel> */}

        </div>
    );
};

export default Home;