import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';
import PageDate from './../constant/PageDate';
import NavMobile from './NavMobile';
//import NavLink from './NavLink';

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
        if (!currentState) {
            document.body.classList.add('fixed');
        } else document.body.classList.remove('fixed');

        this.setState({active: !currentState});

    };

    render() {
        return (
            <div>
                <Link to={`/`} className={this.props.active ? 'nn-mobile-nav__burger js-mobile-nav-opened' : 'nn-mobile-nav__burger'}
                      onClick={this.toggleClass}>
                </Link>
                <NavMobile active={this.state.active ? 'nn-modal js-modal-opened' : 'nn-modal'}/>
                <div className=" nn-nav">
                    {
                        PageDate.nav.map(s => (
                            <div key={s.id} className='nn-nav__item'>
                                <NavLink  activeClassName="selected" to={`/${s.id}`}>
                                    <span>{s.title}</span>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Nav;




