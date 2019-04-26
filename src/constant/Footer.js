import React from 'react';
import Social from './Social';

const Footer = () => (
    <footer>
        <div className="wr_footer">
            <div className="nn-container">
                <div className="nn-footer">
                    <div className="nn-footer__item">
                        some text
                    </div>
                    <div className="nn-footer__item nn-footer__item_social">
                        <Social />
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
