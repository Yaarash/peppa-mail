import { EmailPreview } from "./EmailPreview";

export function EmailList({ emails, onRemove, toggleStar, markAsRead }) {
    return <section className="email-list">
        <ul>
            {emails.map(email => <li key={email.id}>
                <EmailPreview email={email} onRemove={onRemove} onToggleStar={toggleStar} onMarkAsRead={markAsRead}/>     
            </li>)}
        </ul>
    </section>
}