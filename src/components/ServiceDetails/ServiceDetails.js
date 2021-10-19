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
                <h1 className="d-flex justify-content-center align-items-center h-100 text-white">{matchService?.title}</h1>
            </div>
            <div className="me-3">
                <div className="row align-items-center">
                    <div className="col-md-6 me-0 pe-0">
                        <div>
                            <img src={matchService?.img} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6 px-5">
                        <h5 className="mt-5 pt-5 section-title">{matchService?.subTitle}</h5>
                        <h2 style={{ color: "#09425A" }} className="py-3">{matchService?.title}</h2>
                        <p className="text-muted">{matchService?.description}</p>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-6 px-5">
                        <h5 className="mt-5 pt-5 section-title">{matchService?.subTitle1}</h5>
                        <h2 style={{ color: "#09425A" }} className="py-3">{matchService?.title1}</h2>
                        <p className="text-muted">{matchService?.description1}</p>
                    </div>
                    <div className="col-md-6 ps-0 ms-0">
                        <div>
                            <img src={matchService?.img1} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;