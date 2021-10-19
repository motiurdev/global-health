import React from 'react';
import approach from '../../../images/approach.jpg'
import './Approach.css'

const Approach = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-8 pe-5">
                    <p className="text-muted">Dental Care with a Difference</p>
                    <h2 className="section-title pe-3 py-3">At Absolute Dental, we take a Holistic Approach to your Dental Care</h2>
                    <div className="text-muted pe-4">
                        <p>Protecting the health of your teeth is at the forefront of what we do. Our thorough evaluations will ensure that we understand your oral health and all possible options you have to improve it.</p>
                        <p>
                            The health of your teeth can be related to your overall health, and we are happy to discuss this link with you to help you feel empowered in taking care of your body.</p>

                        <p>  We as a team, together with you, endeavour to provide the highest standards of dental care. With continuing care, we can achieve a healthier mouth for life!</p>

                        <p>Contact us today to get in for an immediate appointment! We look forward to partnering with you in improving your oral health.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={approach} className="img-fluid approach" alt="" />
                </div>
            </div>
        </div >
    );
};

export default Approach;