import React from 'react';
import CardBiography from './CardBiography';
import CardAwards from './CardAwards';
import SimpleSlider from './../components/SimpleSlider';


const Home = () => (

        <div className="home">
            <CardBiography/>
            <SimpleSlider/>
            <CardAwards/>
        </div>

);

export default Home;