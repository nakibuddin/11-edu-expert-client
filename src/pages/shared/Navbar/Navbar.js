import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../../images/logo.png'

const Navbar = () => {
    return (
        <div className='my_navbar'>            

            <div className='item_1 display_flex'>
                <NavLink to='/' className={ ({isActive}) => isActive ? undefined : undefined }> <img src={Logo} alt="" /> </NavLink>
                <NavLink id='site_name' className={ ({isActive}) => isActive ? undefined : undefined } to='/'>Edu Expert</NavLink>
            </div>  

            <div className='item_2 display_flex extra_sm'>                
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/services '>Services </NavLink>              
                    {/* <NavLink to='/quiz'>Quiz</NavLink>               */}
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/faq'>FAQ</NavLink>              
            </div>
            
            <div className='item_3 display_flex extra_sm'>
                <NavLink to='/sakib'>Sakib</NavLink>
                <NavLink to='/nakib'>Nakib</NavLink>

                <div className='d-flex flex-row-reverse align-items-center'>
                    {/* {
                        user?.uid && 
                        <>                                                                 
                            <img onClick={showProfile} className='my_border' src={user?.photoURL} alt="" />                                              
                            <span className='displayName'>{user?.displayName}</span>  
                        </>                      
                    } */}
                </div>

                {/* {
                    user?.uid ?                                              
                    <button onClick={handleLogOut} >Log out</button>                                                         
                    :
                    <button onClick={goToLogIn}>Log in</button>
                }                                             */}
            </div>

        </div>
    );
};

export default Navbar;