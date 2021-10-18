import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { id } = useParams()
    const [serviceDetail, setServiceDetail] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceDetail(data))
    }, [])

    const matchService = serviceDetail.find(singleService => singleService.id == id)
    return (
        <div>
            <div className="section-top">
                <h1 className="d-flex justify-content-center align-items-center h-100 text-white">{matchService.title}</h1>
            </div>

        </div>
    );
};

export default ServiceDetails;