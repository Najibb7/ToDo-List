import { useState } from 'react'

export default function Form(props) {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.onSubmit({
            id : Math.floor(Math.random() * 10000),
            text : input
        })

        setInput('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">To Do List :</label>
                    <input type="text" style={{ width: '30%' }} className="form-control" id="task" 
                    value={input} 
                    name='text' 
                    onChange={handleChange} 
                />
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )
}