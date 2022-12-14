import React from 'react';
import './Home.css';
import MyCarousel from './../MyCarousel/MyCarousel';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Service from '../services/Service/Service';
import useTitle from './../../hooks/useTitle';

const Home = () => {
    const services = useLoaderData();
    const navigate = useNavigate();
    useTitle('Home');

    const goToServices = () => {
        navigate('/services');
    }

    return (
        <div>        

            <header>            
                <h1 class="header_section_header text-center"> <br/> <br/>Education is the backbone of a nation.</h1> 
                {/* <h4 class="h4_header_section"> Any donation does make a difference. Getting involved is what makes <br/> Children in Need so moving </h4>         */}
            </header>
            
                <br/><br/>
            <div className="services">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

            <p className='text-center mb-4 mt-4'>
                <button onClick={goToServices} className="btn btn-outline-primary px-4"> Explore more </button>
            </p>


            <section class="mx-4 my-5" id="register">
            <div class="container rounded d-flex flex-column align-items-center text-center flex-md-row justify-content-md-around text-md-start bg_mycolor py-5">                
                <div class="my_inner_class">
                    <h1 class="text-white fw-bold mb-3">Ready to join?</h1>
                    <p class="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>                
                <div class="d-flex align-items-center">                    
                    <button onClick={goToServices} class="btn btn-light btn-lg text-primary px-4" >Check the services</button>
                </div>
            </div>     
            </section>


            {/* <MyCarousel></MyCarousel> */}

        </div>
    );
};

export default Home;