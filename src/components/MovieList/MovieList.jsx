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
        // dispatch({ type: 'FETCH_INDIVIDUAL_GENRES', payload: id });
        dispatch({ type: 'FETCH_MOVIE_GENRES', payload: {id: id} });
        history.push(`/details/${id}`);
    }

    console.log('movies',movies);

    return (
        <main>
            <h1>MovieList</h1>
            <div class="row equal">
                {movies.map(movie => {
                    return (
                        <div class="col-sm-2 d-flex pb-4">
                            <div key={movie.id} className="card card-inverse card-danger">
                                <img className="card-img-top" alt="Card image cap" src={movie.poster} alt={movie.title} onClick={() => imageClick(movie.id, movie.title, movie.poster)}/>
                                <div className="card-body">
                                    <p className="card-text">
                                        {movie.title}
                                        {/* {movie.description} */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>

    );
}

export default MovieList;