export function EmailPreview({ email }) {
    console.log(email)
    return <section className="email-preview">
        <span>{email.from}</span> <span>{email.subject}</span> <span>{email.sentAt}</span>
    </section>
}