import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './details.css'
import {useParams, useHistory} from'react-router-dom';

function Details() {

    const dispatch = useDispatch();
    const history = useHistory();
    let movieId = useParams();
    const details = useSelector(store => store.movie);
    const genres = useSelector(store => store.genres);

    const goBackHome = () => {
        history.push('/');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_INDIVIDUAL_GENRES', payload: {id: movieId.id}});
    }, []);

    return (
        <div className="movie-container">
            <div className="movie-details">
                {details.data?.map(movie => {
                        return (
                            <div key={movie.title} >
                                <div>{movie.title}</div>
                                <div>{movie.description}</div>
                            </div>
                        );  
                    })}
            </div>
            <div className="movie-details">
                <h3>Genres</h3>
                {genres?.map(genre => {
                    return (
                        <div key={genre.name}>
                            {genre.name}
                        </div>
                    );  
                })} 
            </div>
            <button className="btn btn-primary" onClick={goBackHome}>GO BACK TO MOVIE LIST</button> 
        </div>
        
    );
}

export default Details;