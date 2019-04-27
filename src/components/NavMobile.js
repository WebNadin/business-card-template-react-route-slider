import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PageDate from './../constant/PageDate';

class NavMobile extends Component {
    toggleMobNav() {
        const currentState = this.state.active;
        if (!currentState) {
            document.body.classList.add('fixed');
        } else document.body.classList.remove('fixed');

        this.setState({active: !currentState});

    };
    render() {
        return (
            <div className={this.props.active} id="modal">
                <div className="nn-mobile-nav">
                    {
                        PageDate.nav.map(s => (
                            <div key={s.id} className="nn-mobile-nav__item">
                                <Link to={`/${s.id}`}  onClick={this.toggleMobNav}>{s.title}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default NavMobile;


