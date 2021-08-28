import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AddMovie.css'

function AddMovie() {
    const dispatch = useDispatch();
    const [movie, addMovie] = useState('')

    const handleSubmit = event => {
        event.preventDefault();

        addMovie({
            search_query: ''
        })

        dispatch({
            type: 'POST_MOVIE',
            payload: movie
        })
    };

    return (

        <form onSubmit={handleSubmit} className="add-search-form">
            <input
                required
                placeholder="Search for Something"
                value={movie.search_query}
                onChange={(event) => addMovie(
                    event.target.value
                )}
            />
          
            {/* <textarea/> */}
            
        {/* <input type="submit" value="search" /> */}
        <button type="submit">
          Search
        </button>
        </form>
    );
}

export default AddMovie;