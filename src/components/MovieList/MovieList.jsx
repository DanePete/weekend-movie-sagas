import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const imageClick = (id, title, poster) => {
        history.push(`/details/${id}`);
    }

    console.log('movies',movies);

    return (
        <main>
            <h1>MovieList</h1>
            <div class="row equal">
                {movies.map(movie => {
                    return (
                        <div class="col-sm-4 d-flex pb-5">
                            <div key={movie.id} className="card card-inverse card-danger">
                                <h3>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title} onClick={() => imageClick(movie.id, movie.title, movie.poster)}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>

    );
}

export default MovieList;