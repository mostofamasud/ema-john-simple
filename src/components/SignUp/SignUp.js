import React from 'react';
import './SignUp.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='container my-5'>
           <div className='extra-border'>
           <div className='custom-border'>
           <h1 className='text-center login-text'>Register Please!</h1>
            
            <Form className=''>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" />
                </Form.Group>

                <input className='default-button' type="submit" value="Sign Up" />
             </Form>

             <p className='my-2'>Already have an account? Please <Link to='/login'>log in</Link></p>
             <hr />
             <p className='text-center'>or</p>
             <hr />

             <button className='default-button-google'>Continue with Google</button>

           </div>
           </div>
        </div>
    );
};

export default SignUp;