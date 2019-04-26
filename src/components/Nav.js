import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//import { NavHashLink as NavLink } from 'react-router-hash-link';
import PageDate from './../constant/PageDate';
import NavMobile from './NavMobile';
//import BurgerLink from './BurgerLink';
//import { BrowserRouter } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            active: false
        };
    };

    toggleClass() {
        const currentState = this.state.active;
        console.log("clicked");
        if (!currentState) {
            document.body.classList.add('fixed');
        } else document.body.classList.remove('fixed');

        this.setState({active: !currentState});

    };

    render() {
        return (
            <div className="nn-b_nav">
                <Link to={`/`} className={this.props.active ? 'nn-mobile-nav__burger js-mobile-nav-opened' : 'nn-mobile-nav__burger'}
                      onClick={this.toggleClass}>
                </Link>
                <NavMobile active={this.state.active ? 'nn-modal js-modal-opened' : 'nn-modal'}/>
                <div className=" nn-nav">
                    {
                        PageDate.nav.map(s => (
                            <div key={s.id} className={this.props.active ? 'nn-nav__item active' : 'nn-nav__item'} onClick={this.toggleClass}>
                                <Link to={`#${s.id}`}>{s.title}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Nav;




