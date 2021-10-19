import React from 'react';
import dentist1 from '../../../images/dentists/doctor-new-3.jpg'
import dentist2 from '../../../images/dentists/doctor-new-4.jpg'
import dentist3 from '../../../images/dentists/doctor-new-6.jpg'
import './Dentists.css'

const Dentists = () => {
    return (
        <div className="container">
            <h1 className="section-title text-center py-5 pb-5">Our Specialized and Experienced Dentist</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card card-border">
                        <img src={dentist1} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Dr. John Melborn</h5>
                            <p className="card-text text-muted">Prosthodontics Dentist</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-border">
                        <img src={dentist2} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Dr. Ena Dicrosa</h5>
                            <p className="card-text text-muted">Aesthetic Dentistry
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-border">
                        <img src={dentist3} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Dr. Addison Smith</h5>
                            <p className="card-text text-muted">Gastroenterologists
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dentists;