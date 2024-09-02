import { EmailPreview } from "./EmailPreview";

export function EmailList({ emails, onRemove, toggleStar }) {
    return <section className="email-list">
        <ul>
            {emails.map(email => <li key={email.id}>
                <EmailPreview email={email} onRemove={onRemove} onToggleStar={toggleStar}/>     
            </li>)}
        </ul>
    </section>
}