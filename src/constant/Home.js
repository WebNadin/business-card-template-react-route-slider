import React from 'react';
import CardBiography from './CardBiography';
import CardAwards from './CardAwards';
import Slider from './Slider';


const Home = () => (
    <div className="nn-container">
        <div className="home">
            <CardBiography/>
            <Slider/>
            <CardAwards/>
        </div>
    </div>
);

export default Home;