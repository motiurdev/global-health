import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container pt-5 pb-2">
                <div className="row text-white">
                    <div className="col-md-3 mb-4">
                        <h4 className="section-title mb-4 fw-bold">Global Health</h4>
                        <p><span className="fw-bold">Location:</span> 35 West Dental Street</p>
                        <p><span className="fw-bold">Phone:</span> +088 123 654 987</p>
                        <p><span className="fw-bold">Email:</span> info@globalhealth.com</p>
                        <nav className="nav">
                            <Link className="nav-link active social-link me-3 text-muted" aria-current="page" to="/home"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="nav-link social-link me-3 text-muted" to="/home"><i className="fab fa-twitter"></i></Link>
                            <Link className="nav-link social-link me-3 text-muted" to="/home"><i className="fab fa-linkedin-in"></i></Link>
                        </nav>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3 mb-4">
                        <h4 className="section-title mb-3 fw-bold">Our Services</h4>
                        <nav className="nav flex-column">
                            <Link className="nav-link active text-white" aria-current="page" to="/service/1">CROWNS & BRIDGES</Link>
                            <Link className="nav-link text-white" to="/service/2">VENEERS</Link>
                            <Link className="nav-link text-white" to="/service/3">FULL & PARTIAL DENTURES
                            </Link>
                            <Link className="nav-link text-white" to="/service/6">TEETH WHITENING
                            </Link>
                            <Link className="nav-link text-white" to="/service/5">IMPLANT RESTORATIONS
                            </Link>
                        </nav>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h4 className="section-title">Newsletter</h4>
                        <p className="py-3 lh-lg">subscribers to get free conversion optimization tips and resources</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="button-addon2" required />
                            <button className="btn btn-info text-white" type="button" id="button-addon2">Button</button>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-muted py-4 text-center mt-4">Copyright © 2021 global health</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;