import React, {Component} from 'react';
import Slider from "react-slick";
import slide1 from '../img/slide1.jpg';
import slide2 from '../img/slide2.jpg';

class SimpleSlider extends Component {
    render() {
        var settings = {
            adaptiveHeight: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <article className="nn-slider">
                <Slider {...settings}>
                    <div>
                        <img className='' src={slide1} alt="Italian embassy"/>
                    </div>
                    <div>
                        <img className='' src={slide2} alt="China embassy"/>
                    </div>
                </Slider>
            </article>
        );
    }
}
;

export default SimpleSlider;