import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

export default function SearchBar() {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form onSubmit={(e) => handleSearch(e, term.current.value)}>
            <input ref={term} placeholder="Search for music!" type="text"/>
            <button type="submit">Search</button>
        </form>
    )
}