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
      const emailToStar = await emailService.getById(emailId);
      emailToStar.isStared = !emailToStar.isStared;
      console.log(emailToStar);
      await emailService.save(emailToStar);

    } catch (err) {
        console.log(err)            
        alert('Couldnt star email')
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
        
        <EmailList emails={emails} onRemove={removeEmail} toggleStar={starEmail} />
  </section>;
}
