import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <h2>the id passed was: {id}</h2>
            <p>artist data goes here</p>
        </div>
    )
}

export default ArtistView