import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AddMovie.css'

function AddMovie() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [poster, setPoster] = useState('')
    const [genre, setGenre] = useState(0);
    const genres = useSelector(store => store.genres);
    console.log('genre ya', genre);
    useEffect(() => {
        // dispatch({ type: 'FETCH_INDIVIDUAL_GENRES', payload: movieId.id });
        dispatch({ type: 'FETCH_MOVIE_GENRES'});
    }, []);


    const handleSubmit = event => {
        event.preventDefault();

        // addMovie({
        //     search_query: ''
        // })

        dispatch({
            type: 'ADD_MOVIE',
            payload: {title: title, poster: poster, description: description, genre: genre}
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

            <select
                required
                onChange={(event) => setGenre(
                    event.target.value
                )}
            >
                {genres?.map((genre, index) => {
                    return (
                        <option value={index += 1}>{genre.name}</option>
                    );  
                })} 
            </select>
            
            <button type="submit">
            Add Movie
            </button>
        </form>
    );
}

export default AddMovie;