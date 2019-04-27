import React from 'react';
import spriteContacts from '../img/sprite-contacts.svg';

const IconContacts = (props) => (
    <svg className={`icon icon-${props.id}`}>
        <use xlinkHref={`${spriteContacts}#${props.id}`}/>
    </svg>
);

export default IconContacts;
