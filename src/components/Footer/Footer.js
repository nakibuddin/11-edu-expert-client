import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer id="about">
                <section class="bg-dark mt-5 text-center">   
                    <h6 class="text-white mb-0 invisible my_footer_none">Hello</h6>

                    <h1 class="text-white fw-bold mt-5 pt-5">Pro Edu</h1>            
                    <p class="text-white fw-light mb-0">Office 41, Zawaya Buildin, Ghala Muscat,</p>
                    <p class="text-white fw-light mb-0">Sultanate of Oman</p>
                    <p class="text-white fw-light ">Privacy Ploicy | Terms of use</p>

                    <a class="mx-3" href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-square-facebook fs-3"></i></a>
                    <a class="me-3" href="https://twitter.com/" target="_blank"><i class="fa-brands fa-square-twitter fs-3"></i></a>
                    <a class="me-3" href="https://www.linkedin.com/feed/" target="_blank"><i class="fa-brands fa-linkedin fs-3"></i></a>
                    <a class="me-3" href="https://www.tiktok.com/" target="_blank"><i class="fa-brands fa-tiktok fs-3"></i></a>

                    <h1 class="pb-5 text-white invisible my_footer_none">Hello</h1>
                    <h6 class="text-white d-none pb-4 my_footer_hidden">Hello</h6>
                </section>        
        </footer>

        </div>
    );
};

export default Footer;