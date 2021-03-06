import React from 'react';
import { Link } from 'react-router-dom';
import addImg from '../../../images/sign/add.png'
import './SingleService.css'

const SingleService = (props) => {
    const { title, description, img, id } = props.service;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top card-img" alt="..." />
                <span>
                    <img src={addImg} className="addIcon" alt="" />
                </span>
                <div className="card-body">
                    <h5 className="card-title py-2">{title}</h5>
                    <p className="card-text text-muted">{description.slice(0, 100)}...</p>
                    <Link to={`service/${id}`} className='service-btn'>
                        <button className="regular-btn">Details <i class="fas fa-angle-right"></i></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;