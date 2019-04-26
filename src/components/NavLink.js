import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PageDate from './../constant/PageDate';

class NavLink extends Component {
    render() {
        var isActive = this.context.router.route.location.pathname === this.props.to;
        var className = isActive ? 'active' : '';

        return (
            <Link className={className} {...this.props}>
                {this.props.children}
            </Link>
        );
    }
}

export default NavLink;




