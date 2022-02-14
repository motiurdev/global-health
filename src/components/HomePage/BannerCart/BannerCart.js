import React from 'react';
import { Link } from 'react-router-dom';
import './BannerCart.css'

const BannerCart = () => {
    return (
        <div className='container'>
            <div class="row banner-card">
                <div class="col-12 col-md-4 banner-card-1 ps-4">
                    <h4>Professional staff</h4>
                    <p className='py-2'>The ADA has all the tools, resources, and information you need to grow your practice.</p>
                    <Link to="/appointment" className='banner-cart-btn'>Read More</Link>
                </div>
                <div class="col-12 col-md-4 banner-card-2 ps-4">
                    <h4>patient care</h4>
                    <p className='py-2'>The ADA has all the tools, resources, and information you need to grow your practice.</p>
                    <Link to="/appointment" className='banner-cart-btn'>Read More</Link>
                </div>
                <div class="col-12 col-md-4 banner-card-3 ps-4">
                    <h4>Dentist workforce</h4>
                    <p className='py-2'>The ADA has all the tools, resources, and information you need to grow your practice.</p>
                    <Link to="/appointment" className='banner-cart-btn'>Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default BannerCart;