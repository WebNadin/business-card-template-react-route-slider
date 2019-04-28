import React from 'react';
import PageDate from './PageDate';
import muller1 from '../img/muller1.JPG';

const CardBiography = () => (
    <section className="home__card">
        <div className="nn-container">
            <div className="nn-card">
                <div className="nn-card__img">
                    <img className='' src={muller1} alt="Prof.Muller"/>
                </div>
                <div className="nn-card__content">
                    <h2 className="title title_card">
                        {PageDate.cards.biography.title}
                    </h2>
                    <div className="nn-b_content">
                        {
                            PageDate.cards.biography.content.map(s => (
                                <p key={s} className="content content_card">{s}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
);


export default CardBiography;