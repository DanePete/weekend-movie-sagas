import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './details.css'
import {useParams} from'react-router-dom';

function Details() {

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);
    // console.log('genres', genres, 'id', id);

    let ourId = useParams();

    console.log('our id', ourId);
    // dispatch({ type: 'FETCH_INDIVIDUAL', payload: {id: id, title: title, poster: poster } });
    dispatch({ type: 'FETCH_INDIVIDUAL', payload: {} });
    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIES' });
    // }, []);

    return (
        <main>
            {/* <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section> */}
        </main>

    );
}

export default Details;