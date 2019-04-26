import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PageDate from './../constant/PageDate';

class NavMobile extends Component {
    render() {
        return (
            <div className={this.props.active} id="modal" ref="modal">
                <div className="nn-mobile-nav">
                    {
                        PageDate.nav.map(s => (
                            <div key={s.id} className="nn-mobile-nav__item">
                                <Link smooth to={`#${s.id}`}>{s.title}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default NavMobile;


