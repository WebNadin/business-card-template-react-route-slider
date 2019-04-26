import React from 'react';
import PageDate from './PageDate';

const Slider = () => {

    return (
        <div className="service-page nn-container">
            <h4>Slider section</h4>
            {
                PageDate.slider.map(i => (
                        <div key={i} className={i}>
                            {i};
                        </div>
                    )
                )
            }
        </div>
    )
};

export default Slider;