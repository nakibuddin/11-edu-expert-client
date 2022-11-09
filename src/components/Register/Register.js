import React, { useContext, useState } from 'react';
import './Register.css';
import Registration_img from './../../images/registration.PNG'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
    const {createUser, LogInWithGoogle, LogInWithGithub} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            event.target.reset();
            Navigate('/');
            setRegisterError('');
        })
        .catch(error => {
            console.error('my_register_error: ', error);
            setRegisterError(error.message);
        });
    }

    const handleGoogleLogIn = () => {
        LogInWithGoogle()
        .then(result => console.log(result.user))
        .catch(error => console.error('my_google_login_error: ', error));
    }
    const handleGithubLogIn = () => {
        LogInWithGithub()
        .then(result => console.log(result.user))
        .catch(error => console.error('my_github_login_error: ', error));
    }

    return (
        <div className='display_grid'>
            <div className='w-75 mx-auto'>                
                <img className='img-fluid h-100' src={Registration_img} alt="" />
            </div>

            <div>
                <div className='mx-auto login'>
                    <h3 className='my_color mb-4'>Register now to explore more</h3>


                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Name" required/>                    
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name="photoURL" placeholder="Photo URL" required/>                    
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Email" required/>                    
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" minLength="8" placeholder="Password" required/>
                        </Form.Group>

                        <p className='text-danger'>{registerError}</p>
                        
                        <div className='text-center mt-4'>
                            <Button variant="primary w-75" type="submit">
                                Register
                            </Button>                
                        </div>
                    </Form>


                    <div className='text-center'>
                        {/* <p className='mt-3'><small>New to this website? Please <Link to='/register'>Register</Link></small></p> */}
                        {/* <p className='mt-3'><small>Don’t have a account? <Link to='/register'>Register now</Link></small></p> */}
                        <p className='mt-3 fw-semibold'><small>Already have an account? <Link to='/login'>Log in</Link></small></p>

                        <button type="button" onClick={handleGoogleLogIn} className="btn btn-outline-primary w-75 mt-3 mb-3">Continue with google</button> <br/>
                        <button type="button" onClick={handleGithubLogIn} className="btn btn-outline-dark w-75">Continue with github</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;