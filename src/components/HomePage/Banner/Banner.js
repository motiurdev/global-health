import React from 'react';
import './Banner.css'
import bannerImage from '../../../images/banner/right_image.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row align-items-center pb-5 banner-content">
                    {/* banner content */}
                    <div className="col-md-8">
                        <h1 className="display-3 fw-bold lh-base text-white">Your great smile begins with a great dentist</h1>
                        <Link to="/appointment">
                            <button className="banner-btn">Appointment</button>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <img src={bannerImage} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;