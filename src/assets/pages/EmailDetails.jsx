import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { emailService } from "../services/email.service"
import { Link } from "react-router-dom"

export function EmailDetails() {

    const [ email, setEmail ] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        loadEmail()
    }, [id])

    async function loadEmail() {
        const email = await emailService.getById(id)
        setEmail(email) 
    }

    return <section className="email-details">
        <h1>Details</h1>
        <pre>{JSON.stringify(email, null, 2)}</pre>
        <Link to="/emails" >Back</Link>
        <Link to="/email/e101" >Next</Link>
    </section>
}