import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css'
import Logo from './../../images/logo.png'
import { AuthContext } from '../../context/UserContext';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const goToLogIn = () => {
        navigate('/login');
    }

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.error('my_error: ', error));
    }
    
    const showProfile = () => {
        navigate('/login');
    }

    return (
        <div className='my_navbar'>            

            <div className='item_1 display_flex'>
                <NavLink to='/' className={ ({isActive}) => isActive ? undefined : undefined }> <img src={Logo} alt="" /> </NavLink>
                <NavLink id='site_name' className={ ({isActive}) => isActive ? undefined : undefined } to='/'>Edu Expert</NavLink>

                {/* <button onClick={btnClick} disabled={disable} className={`btn btn-primary ml-[20px] ${disable ? 'text-3xl' : ''} `} > Button</button> */}

            </div>  

            <div className='item_2 display_flex extra_sm'>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/add-service'>Add service</NavLink>
                    <NavLink to='/my-reviews'>My reviews</NavLink>

                    <NavLink to='/blog'>Blog</NavLink>

                    {/* <NavLink to='/quiz'>Quiz</NavLink> */}
                    {/* <NavLink to='/faq'>FAQ</NavLink> */}
            </div>
            
            <div className='item_3 display_flex extra_sm'>

                <div className='d-flex flex-row-reverse align-items-center'>
                    {
                        user?.uid && 
                        <>                                                                 
                            <img onClick={showProfile} className='my_border navbar_user_photo' src={user?.photoURL} alt="" />                                              
                            <span className='displayName'><b>{user?.displayName}</b></span>  
                        </>                      
                    }
                </div>

                {
                    user?.uid ?                                              
                    <button onClick={handleLogOut} >Log out</button>                                                         
                    :
                    <button onClick={goToLogIn}>Log in</button>
                }                                            
            </div>

        </div>
    );
};

export default Navbar;