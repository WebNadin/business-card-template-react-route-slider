import React from 'react';
import Nav from './../components/Nav';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="nn-container">
            <div className="nn-header">
                <div className="nn-header__item">
                    <Link to={`/`}>
                        <h1>Prof. Dr. Jochem Muller</h1>
                    </Link>
                </div>
                <div className="nn-header__item">
                    <Nav />
                </div>
            </div>
        </div>
    </header>
);

export default Header;
