import React from 'react';
import Approach from '../Approach/Approach';
import Banner from '../Banner/Banner';
import BannerCart from '../BannerCart/BannerCart';
import Dentists from '../Dentists/Dentists';
import OurTeam from '../OurTeam/OurTeam';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    window.scrollTo(0, 0)
    return (
        <div>
            <Banner></Banner>
            <BannerCart />
            <Service></Service>
            <Dentists></Dentists>
            <Testimonial />
            <Approach></Approach>
            <OurTeam />
        </div>
    );
};

export default Home;