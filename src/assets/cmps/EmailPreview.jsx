import React, { useState } from 'react';
import { Link } from "react-router-dom";

import deleteIcon from '../../../public/delete.png';
import starIcon from '../../../public/star.png';

function _timestamp( timestamp ) {
    const dateObject = new Date(timestamp);
    const formattedDate = dateObject.toLocaleString();
  
    return <div>{formattedDate}</div>;
  }

export function EmailPreview({ email, onRemove, onToggleStar }) {
    const [ isStared, toggleStar ] = useState(email.isStared);

    function _changeToggleStar(email) {
        console.log('clicked star');
        toggleStar(!email.isStared)
        onToggleStar(email.id)
    }

    return <section className="email-preview">
        <span>{email.from}</span> <span>{email.subject}</span> 
        <Link className='text-overflow' to={`/email/${email.id}`}>{email.body}</Link>
        <button onClick={() => onRemove(email.id)}>
            <img src={deleteIcon} className="delete-button" alt="Delete" />
        </button>
        <button className={isStared ? 'star-icon full :before' : 'star-icon'} onClick={() => _changeToggleStar(email)}>
        ☆
        {/* <img src={starIcon} className="hollow-star-button" alt="Star" /> */}
        </button>  
        <span className='email-date'>{_timestamp(email.sentAt)}</span>
    </section>
}

