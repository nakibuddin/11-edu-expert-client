import React from 'react';
import './AddService.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
    const navigate = useNavigate();

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;        
        const name = form.name.value;
        const logo = form.URL.value;
        const details = form.details.value;
        const price = form.price.value;

        const service = {name, logo, details, price};
        
        fetch('https://11-edu-expert-server.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },            
            body: JSON.stringify(service),
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.acknowledged){
                toast('Service added successfully.', {position: toast.POSITION.TOP_CENTER});
                navigate('/services');
                // event.target.reset();                
            }
        })
        .catch(error => console.error('my_fetch_error: ', error));

    }

    return (
        <div className='mx-auto login add-service mb-5'>
            <h3 className='mb-4 my_color text-center'>Add your desired service</h3>

            <Form onSubmit={handleAddService}>                    
                <Form.Group className="mb-3 fw-semibold" controlId="formBasicName">
                    <Form.Label>Service name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Service name" required/>                    
                </Form.Group>

                <Form.Group className="mb-3 fw-semibold" controlId="formBasicURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="URL" placeholder="Photo URL" required/>
                </Form.Group>

                <Form.Group className="mb-3 fw-semibold" controlId="formBasicDetails">
                    <Form.Label>Service details</Form.Label>
                    <Form.Control type="text" name="details" placeholder="Service details" required/>                    
                </Form.Group>

                <Form.Group className="mb-3 fw-semibold" controlId="formBasicPrice">
                    <Form.Label> Price </Form.Label>
                    <Form.Control type="text" name="price" placeholder="Price" required/>                    
                </Form.Group>
                
                <div className='text-center mt-4'>
                    <Button variant="primary w-25" type="submit">
                        Add Service
                    </Button>                
                </div>
            </Form>                    
        </div>         
    );
};

export default AddService;