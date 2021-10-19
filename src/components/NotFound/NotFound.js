import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../images/undraw_page_not_found_su7k.svg'

const NotFound = () => {
    window.scrollTo(0, 0)
    return (
        <div className="container">
            <div className="text-center py-5 my-5">
                <img src={NotFoundImage} alt="" width="700" />
                <h1 className="mt-4 section-title">Page Not Found</h1>
                <Link to="/home">
                    <button className="regular-btn mt-3">Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;