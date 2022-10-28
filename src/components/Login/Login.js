import React from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='container my-5'>
           <div className='extra-border'>
           <div className='custom-border'>
           <h1 className='text-center login-text'>Login</h1>
            
            <Form className=''>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <input className='default-button' type="submit" value="Log In" />
             </Form>

             <p className='my-2'>New to Ema John? <Link to='/signup'>create a new account</Link></p>
             <hr />
             <p className='text-center'>or</p>
             <hr />
             <button className='default-button-google'>Continue with Google</button>
           </div>
           </div>
        </div>
    );
};

export default Login;