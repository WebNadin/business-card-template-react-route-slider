import React from 'react';
import PageDate from './PageDate';
import { Link } from 'react-router-dom'
import IconContacts from './IconContacts';


const Contacts = () => (
    <div className="nn-contacts">
        {
            PageDate.contacts.map(c => (
                <div key={c.id} className="nn-card">
                    <div className="nn-card__item">
                        <IconContacts id={c.id}/>
                    </div>
                    <div className="nn-card__item">
                        {c.title}/>
                    </div>
                </div>
            ))
        }
    </div>
);

export default Contacts;