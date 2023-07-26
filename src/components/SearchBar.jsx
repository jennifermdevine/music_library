import {useState} from 'react'

export default function SearchBar(props) {
    const [input, setInput] = useState("")

    return (
        <form onSubmit={(e) => props.handleSearch (e, input)}>
            <input placeholder="Search for music!" type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    )
}