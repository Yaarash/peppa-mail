import React, { useState } from 'react';
import { Link } from "react-router-dom";

import deleteIcon from '../../../public/delete.png';
import starIcon from '../../../public/star.png';

function _timestamp( timestamp ) {
    const dateObject = new Date(timestamp);
    const formattedDate = dateObject.toLocaleString();
  
    return <div>{formattedDate}</div>;
  }

export function EmailPreview({ email, onRemove, onToggleStar, onMarkAsRead }) {
    const [ isStared, toggleStar ] = useState(email.isStared);
    const [ isRead, toggleReadEmail ] = useState(email.isRead);

    function _changeToggleStar(email) {
        console.log('clicked star');
        toggleStar(!email.isStared);
        onToggleStar(email.id);
    }

    function _markAsRead({ id }) {
        console.log('read email');
        toggleReadEmail(!email.isRead);
        onMarkAsRead(id);
    }

    return <section className="email-preview unread">
        <span>{email.from}</span> <span>{email.subject}</span> 
        <Link className={isRead ? 'text-overflow unread' : 'text-overflow read'} to={`/email/${email.id}`} onClick={() => _markAsRead(email)}>{email.body}</Link>
        <button onClick={() => onRemove(email.id)}>
            <img src={deleteIcon} className="delete-button" alt="Delete" />
        </button> 
        <button className={isStared ? 'star-icon full :before' : 'star-icon'} onClick={() => _changeToggleStar(email)}>
        ☆
        </button>  
        <span className='email-date'>{_timestamp(email.sentAt)}</span>
    </section>
}

