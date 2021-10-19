import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { loginSubmit, handleEmail, handlePassword, signInUsingGoogle, signInUsingGithub } = useAuth()
    window.scrollTo(0, 0)
    return (
        <div className="container my-5 pb-3">
            <div className="w-50 mx-auto">
                <Form onSubmit={loginSubmit}>
                    <h1 className="section-title text-center py-4">Login Form</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onBlur={handleEmail} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handlePassword} placeholder="Password" />
                    </Form.Group>
                    <p className="text-danger"></p>
                    <button className="regular-btn" variant="primary" type="submit">
                        Login
                    </button>
                    <div>
                        <p className="text-end pt-2">Create account?<Link to="/register">Sign Up</Link></p>
                    </div>
                </Form>
                <div className="text-center mt-5">
                    <p className="text-muted fw-bold">Or</p>
                    <div className="d-flex justify-content-center">
                        <button className="regular-btn google-sing" style={{ background: "#DB4437" }} onClick={signInUsingGoogle}><i class="fab fa-google"></i> Google Sign</button>
                        <button className="regular-btn google-sing ms-3" style={{ background: "#2b3137" }} onClick={signInUsingGithub} ><i class="fab fa-github"></i> Github Sign</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;