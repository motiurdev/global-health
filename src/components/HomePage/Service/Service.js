import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="py-5">
            <div className="container">
                <h1 className="section-title text-center">Our Services</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            service={service}
                        ></SingleService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;