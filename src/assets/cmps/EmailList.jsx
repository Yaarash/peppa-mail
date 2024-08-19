/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import { EmailPreview } from "./EmailPreview";

export function EmailList({ emails, onRemove }) {
    return <section className="email-list">
        <ul>
            {emails.map(email => <li key={email.id}>
                <EmailPreview email={email}/>
                <button onClick={() => onRemove(email.id)}>x</button>
                {/* <Link to={`/email/${email.id}`} >Details</Link> */}
            </li>)}
        </ul>
    </section>
}