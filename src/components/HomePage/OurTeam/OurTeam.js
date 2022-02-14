import React from 'react';
import teamDoctorImg from '../../../images/team_doctor/team-doctor.png'
import doctorSign from '../../../images/sign/img-cardiology-signature.png'
import icon1 from '../../../images/sign/doctor.png'
import icon2 from '../../../images/sign/heart.png'
import './OurTeam.css'

const OurTeam = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-md-4">
                    <img src={teamDoctorImg} className="img-fluid" alt="" />
                </div>
                <div className="col-12 col-md-8">
                    <h5>INTRODUCING OUR TEAM</h5>
                    <h1 className='section-title'>Great passion</h1>
                    <h2>for healing</h2>
                    <p className='text-secondary'>Some up and coming trends are healthcare consolidation for independent healthcare centers that see a cut in unforeseen payouts. High deductible health plans are also expected to transpire along with a growth of independent practices.
                    </p>
                    <div className="row">
                        <div className="col-md-7"></div>
                        <div className="col-md-5">
                            <div className="doctor-info">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h5 className='section-title'>CHASE FRANKLIN</h5>
                                        <p className='text-secondary'>Fonder & CEO</p>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={doctorSign} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={icon1} className="teamIcon" />
                                </div>
                                <div className="col-md-8">
                                    <h5>PROFESSIONAL TEAM</h5>
                                    <p className='text-secondary'>Globally harness multimedia based collaboration and idea-sharing with backend products. Continually whiteboard superior opportunities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={icon2} className="teamIcon" />
                                </div>
                                <div className="col-md-8">
                                    <h5>SERVICES AND TECHNOLOGY</h5>
                                    <p className='text-secondary'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;