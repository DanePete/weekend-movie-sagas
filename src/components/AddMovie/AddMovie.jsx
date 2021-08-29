import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AddMovie.css'

function AddMovie() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [poster, setPoster] = useState('')

    const handleSubmit = event => {
        event.preventDefault();

        // addMovie({
        //     search_query: ''
        // })

        dispatch({
            type: 'ADD_MOVIE',
            payload: {title: title, poster: poster, description: description}
        })
    };

    return (

        <form onSubmit={handleSubmit} className="add-search-form">
            <input
                required
                placeholder="Search for Something"
                value={title.search_query}
                onChange={(event) => setTitle(
                    event.target.value
                )}
            />
                <input
                required
                placeholder="Search for Something"
                value={poster.search_query}
                onChange={(event) => setPoster(
                    event.target.value
                )}
            />
            <textarea
                required
                placeholder="Search for Something"
                value={description.search_query}
                onChange={(event) => setDescription(
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