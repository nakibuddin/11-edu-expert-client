import React from 'react';
import './Login.css'
import login_img from './../../images/login.PNG'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/UserContext';


const Login = () => {
    const {logIn, LogInWithGoogle, LogInWithGithub, setLoading} = useContext(AuthContext);    
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    // console.log('From login page: ', location);
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogIn = () => {
        LogInWithGoogle()
        .then(result => {
            console.log(result.user);
            navigate(from, {replace: true});
        })
        .catch(error => console.error('my_google_login_error: ', error));
    }
    const handleGithubLogIn = () => {
        LogInWithGithub()
        .then(result => {
            console.log(result.user);
            navigate(from, {replace: true});
        })
        .catch(error => console.error('my_github_login_error: ', error));
    }

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;        
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        logIn(email, password)
        .then(result => {
            console.log(result.user);
            navigate(from, {replace: true});
            setLoginError('');
        })
        .catch(error => {            
            console.error('my_github_login_error: ', error);
            setLoading(false);
            setLoginError(error.message);
        });
    }

    return (
        <div className='display_grid'>
            <div className='w-75 mx-auto'>                
                <img className='img-fluid h-100 hide' src={login_img} alt="" />
            </div>

            <div>
                <div className='mx-auto login'>
                    <h3 className='mb-4 my_color'>Good to see you again!</h3>


                    <Form onSubmit={handleLogIn}>                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Email" required/>                    
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required/>
                        </Form.Group>
                        
                        <p className='text-danger'>{loginError}</p>
                        
                        <div className='text-center mt-4'>
                            <Button variant="primary w-75" type="submit">
                                Log in
                            </Button>                
                        </div>
                    </Form>


                    <div className='text-center'>
                        {/* <p className='mt-3'><small>New to this website? Please <Link to='/register'>Register</Link></small></p> */}
                        {/* <p className='mt-3'><small>Don’t have a account? <Link to='/register'>Register now</Link></small></p> */}
                        <p className='mt-3 fw-semibold'><small>Don’t have a account? <Link to='/register'>Create an account</Link></small></p>

                        <button type="button" onClick={handleGoogleLogIn} className="btn btn-outline-primary w-75 mt-3 mb-3">Continue with google</button> <br/>
                        <button type="button" onClick={handleGithubLogIn} className="btn btn-outline-dark w-75">Continue with github</button>
                    </div>
                    
                </div>                
            </div>
        </div>
    );
};

export default Login;