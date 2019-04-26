import React from 'react';
import PageDate from './PageDate';
import { Link } from 'react-router-dom'
import IconSocial from './IconSocial';


const Social = () => (
    <div className="nn-social">
        {
            PageDate.social.map(s => (
                <div key={s} className="nn-social__item">
                    <Link to={`/`}>
                        <IconSocial name={s}/>
                    </Link>
                </div>
            ))
        }
    </div>
);

export default Social;