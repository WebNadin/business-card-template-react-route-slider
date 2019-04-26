import React, {Component} from 'react';
import PageDate from './PageDate';
import { Link } from 'react-router-dom'


class Card extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="nn-container">
                <div className="nn-b_cards">

                    <div className="nn-b_cards__item nn-b_cards__item_services">

                        <div className="nn-card">
                            <div className="nn-card__item">
                                <div className="nn-b_img">
                                    {PageDate.cards.biography.imgName}
                                </div>
                                <div className="nn-b_content">
                                    <h3>{PageDate.cards.title}
                                        {this.props.name}
                                    </h3>
                                    <p>
                                        {
                                            PageDate.cards.biography.content.map(s => (
                                                <p>{s}</p>
                                            ))
                                        }
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}


export default Card;