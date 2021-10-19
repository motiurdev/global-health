import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Register = () => {

    const { regisrationSubmit,
        handleName,
        handleEmail,
        handlePassword,
        error,
        signInUsingGoogle,
        signInUsingGithub,
    } = useAuth()

    return (
        <div className="container mt-5">
            <div className="w-50 mx-auto">
                <Form onSubmit={regisrationSubmit}>
                    <h1 className="section-title text-center py-4">Registration Form</h1>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onBlur={handleName} placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onBlur={handleEmail} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handlePassword} placeholder="Password" />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <button className="regular-btn" variant="primary" type="submit">
                        Register
                    </button>
                    <p className="text-end">Already have an account?<Link to="/login">Sign In</Link></p>
                </Form>
                <div className="text-center mt-5">
                    <p className="text-muted fw-bold">Or</p>
                    <button className="regular-btn google-sing" style={{ background: "#DB4437" }} onClick={signInUsingGoogle}><i class="fab fa-google"></i> Google Sign</button>
                    <button className="regular-btn google-sing ms-3" style={{ background: "#2b3137" }} onClick={signInUsingGithub}><i class="fab fa-github"></i> Github Sign</button>

                </div>
            </div>
        </div>
    );
};

export default Register;