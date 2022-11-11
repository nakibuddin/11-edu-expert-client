import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer id="about">
                <section className="bg-dark mt-5 text-center">   
                    <h6 className="text-white mb-0 invisible my_footer_none">Hello</h6>

                    <h1 className="text-white fw-bold mt-4 pt-0">Edu Expert</h1>            
                    <p className="text-white fw-light mb-0">Konapara Dogair, Demra Dhaka-1361</p>
                    <p className="text-white fw-light mb-0">Dhaka, Bangladesh</p>
                    <p className="text-white fw-light ">Privacy Ploicy | Terms of use</p>

                    <a className="mx-3" href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-square-facebook fs-3"></i></a>
                    <a className="me-3" href="https://twitter.com/" target="_blank"><i className="fa-brands fa-square-twitter fs-3"></i></a>
                    <a className="me-3" href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin fs-3"></i></a>
                    <a className="me-3" href="https://www.tiktok.com/" target="_blank"><i className="fa-brands fa-tiktok fs-3"></i></a>

                    <h1 className="pb-0 text-white invisible my_footer_none">Hello</h1>
                    <h6 className="text-white d-none pb-0 my_footer_hidden">Hello</h6>
                </section>        
        </footer>

        </div>
    );
};

export default Footer;