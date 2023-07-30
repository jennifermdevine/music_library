import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

export default function SearchBar() {
    const {term, handleSearch} = useContext(SearchContext)

    const barStyle = {
        width: "20%",
        height: "20px",
        border: "2px solid black",
        borderRadius: "10px"
    }

    return (
        <form onSubmit={(e) => handleSearch(e, term.current.value)}>
            <input style={barStyle} ref={term} placeholder="Search for music!" type="text"/>
            <br></br>
            <button style={{borderRadius: "10px"}} type="submit">Search</button>
        </form>
    )
}