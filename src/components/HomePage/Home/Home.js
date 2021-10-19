import React from 'react';
import Approach from '../Approach/Approach';
import Banner from '../Banner/Banner';
import Dentists from '../Dentists/Dentists';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Dentists></Dentists>
            <Approach></Approach>
        </div>
    );
};

export default Home;