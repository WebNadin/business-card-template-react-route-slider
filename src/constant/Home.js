import React from 'react';
import CardBiography from './CardBiography';
import CardAwards from './CardAwards';
import SimpleSlider from './SimpleSlider';


const Home = () => (
    <div className="nn-container">
        <div className="home">
            <CardBiography/>
            <SimpleSlider/>
            <CardAwards/>
        </div>
    </div>
);

export default Home;