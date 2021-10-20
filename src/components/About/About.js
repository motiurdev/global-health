import React from 'react';
import aboutImage from '../../images/sedation-01-1.jpg'
import aboutImage1 from '../../images/ToothDr-WebBanners-01.png'

const About = () => {
    return (
        <div className="container py-5">
            <h1 className="section-title text-center my-4">About Us</h1>
            <div>
                <p className="fs-5 text-muted">Here at Tooth club the satisfaction of our clients is everything to us. The standards we set for ourselves are insanely high. </p>
                <p className="fs-5 text-muted">We will always go that extra mile to ensure we’re providing a highly hygienic and quality level of service that is above board with all regulations.
                    By putting passion and pride into everything we do, the result should be a level of excellence that’s second to none. By helping our patients achieve their goals we in turn hope to achieve ours.
                </p>
            </div>
            <div className="row py-5">
                <div className="col-md-6">
                    <img src={aboutImage} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <p className="text-muted lh-lg ps-4">Passion, quality and expertise are at the core of everything we do. Our dedicated team of friendly staff work tirelessly together to provide an unforgettable customer experience. Our patients are like family to us and we treat them as such. We’re always here for them no matter how big or small their need may be. We make a solid commitment to only recruiting the top talent possible for our business. The kind of workers that leave a long-lasting impression due to their fierce drive to satisfy the customer.

                    </p>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-md-6 text-muted pe-4">
                    <p className="lh-lg">Above everything else is a strong ethos of fun. We like to provide a highly personalized, good-willed service to our patients that they will truly enjoy.</p>
                    <p className="lh-lg">
                        Rejecting the usual bore of dental visits, we aim to create a joy-filled experience with a strong focus on customer happiness. We will always go above and beyond for our clients and hope to nurture long-term relationships with them. This means they can rely on us to provide them with the best dental service imaginable time and time again.
                    </p>
                </div>
                <div className="col-md-6">
                    <img src={aboutImage1} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default About;