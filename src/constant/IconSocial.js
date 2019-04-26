import React from 'react';
import spriteSocial from '../img/sprite-social.svg';

const IconSocial = (props) => (
    <svg className={`icon icon-${props.name}`}>
        <use xlinkHref={`${spriteSocial}#${props.name}`}/>
    </svg>
);

export default IconSocial;
