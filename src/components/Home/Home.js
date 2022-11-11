import React from 'react';
import './Home.css';
import MyCarousel from './../MyCarousel/MyCarousel';
import Footer from './../Footer/Footer';

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <Footer></Footer>
            <MyCarousel></MyCarousel>

        </div>
    );
};

export default Home;