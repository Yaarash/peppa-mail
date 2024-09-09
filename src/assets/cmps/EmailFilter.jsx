import { useEffect, useState } from "react"

export function EmailFilter({ filterBy, onFilterBy }) {

    const [ filterByToEdit, setFilterByToEdit ] = useState(filterBy)

    useEffect(() => {
        onFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        console.log(target);
        const { type, name } = target;
        const value = target.value;
        console.log(value);
        setFilterByToEdit(prev => ({ ...prev, [name]: value }))
        console.log(filterBy)
    }

    return <section className="email-filter">
        <label htmlFor="subject">Search by subject </label>
        <input 
            type = "text"
            value={filterByToEdit.subject} 
            onChange={handleChange}
            id="subject" 
            name="subject"/>

    </section>
}