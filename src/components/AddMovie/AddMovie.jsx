import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddMovie.css'

function AddMovie() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [poster, setPoster] = useState('')
    const [genre, setGenre] = useState(0);
    const genres = useSelector(store => store.genres);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE_GENRES'});
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_MOVIE',
            payload: {title: title, poster: poster, description: description, genre: genre}
        })
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit} className="add-search-form">
            <input
                required
                className="form-control"
                placeholder="Movie Title"
                value={title.search_query}
                onChange={(event) => setTitle(
                    event.target.value
                )}
            />
                <input
                required
                className="form-control"
                placeholder="Poster URL"
                value={poster.search_query}
                onChange={(event) => setPoster(
                    event.target.value
                )}
            />
            <textarea
                required
                className="form-control"
                placeholder="Description"
                value={description.search_query}
                onChange={(event) => setDescription(
                    event.target.value
                )}
            />

            <select
                required
                className="form-control"
                onChange={(event) => setGenre(
                    event.target.value
                )}
            >
                {genres?.map((genre, index) => {
                    return (
                        <option
                            className="form-control" 
                            value={index += 1}>
                            {genre.name}
                        </option>
                    );  
                })} 
            </select>
            
            <button className="btn btn-primary" type="submit">
            Add Movie
            </button>
        </form>
    );
}

export default AddMovie;