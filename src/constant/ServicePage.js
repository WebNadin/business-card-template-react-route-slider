import React from 'react';
import PageDate from './PageDate';

const ServicePage = () => {

    return (
        <div className="service-page nn-container">
            <h4>This should be one of these pages</h4>
            {
                PageDate.services.map(s => (
                        <div key={s.id} className={s.id}>
                            {s.id};
                        </div>
                    )
                )
            }
        </div>
    )
};

export default ServicePage;