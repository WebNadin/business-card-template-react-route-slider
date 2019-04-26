import React from 'react';
import Nav from './../components/Nav';

const Header = () => (
    <header>

            <div className="nn-header">
                <div className="nn-header__item">
                    <h1>Prof. Dr. Jochem Muller</h1>
                </div>
                <div className="nn-header__item">
                    <Nav />
                </div>
            </div>

    </header>
);

export default Header;
