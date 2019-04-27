import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PageDate from './../constant/PageDate';

class NavLink extends Component {
    render() {

        return (
            <Link activeClassName="selected" {...this.props}/>
        );
    }
}

export default NavLink;




