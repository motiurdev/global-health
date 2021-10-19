import React, { useEffect, useState } from 'react';
import OurService from '../OurService/OurService';

const Services = () => {
    const [ourServices, setOurServices] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setOurServices(data))
    }, [])
    return (
        <div className="py-5">
            <div className="container">
                <h1 className="section-title text-center py-3 pb-5">Our Services</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        ourServices.map(service => <OurService
                            key={service.id}
                            service={service}
                        ></OurService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;