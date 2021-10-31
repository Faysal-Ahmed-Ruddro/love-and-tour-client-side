import React from 'react';
import "./Home.css"
import Banner from '../Banner/Banner';
import Places from '../OurPlaces/Places';
import ChooseUs from '../ChooseUs/ChooseUs';
import OurAmbition from '../../OurAmbition/OurAmbition';

const Home = () => {
    return (
        <div className="home">
            <Banner> </Banner>
            <Places></Places>
            <ChooseUs></ChooseUs>
            <OurAmbition></OurAmbition>
        </div>
    );
};

export default Home;