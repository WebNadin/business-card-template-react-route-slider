import React from 'react';
import Contacts from './Contacts';

const Footer = () => (
    <footer>
        <div className="wr_footer">
            <div className="nn-container">
                <div className="nn-footer">
                    <div className="nn-footer__item">
                        <h3 className="title title_footer">Datenschutz Impressum</h3>
                    </div>
                    <div className="nn-footer__item nn-footer__item_contacts">
                        <Contacts />
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
