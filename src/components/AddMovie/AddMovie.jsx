import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AddMovie.css'

function AddMovie() {

    // const dispatch = useDispatch();
    // const genres = useSelector(store => store.genres);
    // console.log('genres', genres, 'id', id);

    // dispatch({ type: 'FETCH_INDIVIDUAL', payload: {id: id, title: title, poster: poster } });
    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIES' });
    // }, []);
    const dispatch = useDispatch();
    const [newSearch, setNewSearch] = useState('')


    const handleSubmit = event => {
        event.preventDefault();
        console.log('got here?!');
        console.log('Add new search', newSearch);

        setNewSearch({
            search_query: ''
        })

        dispatch({
            type: 'CREATE_NEW_SEARCH',
            payload: newSearch
        })
    };

    return (

        <form onSubmit={handleSubmit} className="add-search-form">
            <input
                required
                placeholder="Search for Something"
                value={newSearch.search_query}
                onChange={(event) => setNewSearch(
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