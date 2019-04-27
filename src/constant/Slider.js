import React from 'react';
import PageDate from './PageDate';

const Slider = () => {

    return (
        <section className="nn-slider">
            <div className="nn-container">
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
        </section>
    )
};

export default Slider;