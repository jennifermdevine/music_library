import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import SearchBar  from './components/SearchBar';
import Gallery from './components/Gallery';
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'

function App() {
  const [data, setData] = useState([])
  const [message, setMessage] = useState("Type below to search for music!")
  const searchInput = useRef('')
  
  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title= `${term} Music`
      const response = await fetch(API_URL + term)
      const resData = await response.json()
      if (resData.results.length) {
        setData(resData.results)
      } else {
        setMessage("Not found!")
      }
    }
    fetchData()
}

  return (
    <div className="App">
      {message}
      <Router>
        <Routes>
          <Route path="/" element={
            <>
                  <SearchContext.Provider value={{
                    term: searchInput,
                    handleSearch: handleSearch
                  }}>
                  <SearchBar />
                  </SearchContext.Provider>
          <DataContext.Provider value={data} >
          <Gallery data={data}/>
          </DataContext.Provider>
            </>
          } />
        <Route path="/album/:id" element={<AlbumView />} />
        <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
