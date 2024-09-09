import { useEffect, useState } from 'react';

import { emailService } from '../services/email.service';
import { EmailList } from '../cmps/EmailList';
import { EmailFilter } from '../cmps/EmailFilter';


import '../css/App.css'

export function EmailIndex() {
  const [ emails, setEmails ] = useState(null);

  const defaultFilter = emailService.getDefaultFilter();
  const [ filterBy, setFilterBy ] = useState(defaultFilter);

  useEffect(() => {
    loadEmails()
  }, [filterBy]);

  useEffect(() => {
    console.log(emails)
  }, [emails]);

  async function loadEmails() {
    try {
        const emails = await emailService.query(filterBy);
        setEmails(emails);
    } catch (err) {
        console.log(err)            
        alert('Couldnt load emails')
    }
  }

  async function removeEmail(emailId) {
    try {
        await emailService.remove(emailId)
        setEmails(emails => emails.filter(email => email.id !== emailId))
    } catch (err) {
        console.log(err)            
        alert('Couldnt remove email')
    }
  }

  async function starEmail(emailId) {
    try {
    const idx  = emails.findIndex(m => m.id === emailId);
    emails[idx].isStared=!emails[idx].isStared;
    emailService.save(emails[idx]);
     
    setEmails(prev => ([...emails]))
    } catch (err) {
        console.log(err)            
        alert('Couldnt star email')
    }
  }

  async function markAsRead(emailId) {
    try {
      const idx = emails.findIndex(m => m.id === emailId);
      if (!emails[idx].isRead) {
        emails[idx].isRead = !emails[idx].isRead;
      }
      emailService.save(emails[idx]);

      setEmails(prev => ([...emails]));
      console.log(emails[idx]);
    } catch (err) {
        console.log(err)            
        alert('Couldnt mark email as read')
    }
  }

  function onFilterBy(filterBy) {
    console.log(filterBy)
      setFilterBy(filterBy)
  }

  if (!emails) return <div>Loading...</div>;
  return <section className='email-index'>
        <section className='email-sidebar'>
            <h1>Temp sidebar</h1>
        </section>
        <section className='email-filter'>
                <h1>Welcome to peppa-mail!</h1>
                <EmailFilter filterBy={filterBy} onFilterBy={onFilterBy}/>
        </section>
        
        <EmailList emails={emails} onRemove={removeEmail} toggleStar={starEmail} markAsRead={markAsRead}/>
  </section>;
}
