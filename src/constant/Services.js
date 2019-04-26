import React from 'react';
import PageDate from './PageDate';
import { Link } from 'react-router-dom'
import IconServices from './IconServices';


const Services = () => (
    <div className="b_services" id="services">
        <div className="wr_title line">
            <div className="nn-container relative">
                <h2 className="b_services__title nn-title nn-title_line">Our services</h2>
            </div>
        </div>
        <div className="nn-container">
            <div className="nn-b_cards">
                {
                    PageDate.services.map(s => (
                        <div key={s.id} className="nn-b_cards__item nn-b_cards__item_services">
                            <Link to={`/service/${s.id}`}>
                                <div className="nn-card">
                                    <div className="nn-card__item">
                                        <div className="nn-b_img">
                                            <IconServices type={s.imgName}/>
                                        </div>
                                        <div className="nn-b_content">
                                            <h3>{s.title}</h3>
                                            <p>{s.content}</p>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
);

export default Services;