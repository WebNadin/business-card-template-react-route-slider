import React from 'react';
import PageDate from './PageDate';
import IconContacts from './IconContacts';


const Contacts = () => (
    <div className="nn-contacts">
        {
            PageDate.contacts.map(c => (
                <div key={c.id} className="nn-contacts__item">
                    <div className="nn-card nn-card_contacts">
                        <div className="nn-card__item">
                            <IconContacts id={c.id}/>
                        </div>
                        <div className="nn-card__item">
                            {c.title}
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
);

export default Contacts;