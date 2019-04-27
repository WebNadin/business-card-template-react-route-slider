import React from 'react';
import PageDate from './PageDate';
import muller2 from '../img/muller2.JPG';

const CardAwards = () => (
    <section className="home__card">

        <div className="nn-card">
            <div className="nn-card__img nn-card__img_right">
                <img className='' src={muller2} alt="Prof.Muller with award"/>
            </div>
            <div className="nn-card__content">
                <h2 className="title title_card">
                    {PageDate.cards.awards.title}
                </h2>
                <div className="nn-b_content">
                    {
                        PageDate.cards.awards.content.map(s => (
                            <p key={s} className="content content_card">{s}</p>
                        ))
                    }
                </div>
            </div>
        </div>

    </section>
);

export default CardAwards;