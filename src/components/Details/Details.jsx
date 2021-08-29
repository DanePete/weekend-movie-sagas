import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './details.css'
import {useParams} from'react-router-dom';

function Details() {

    const dispatch = useDispatch();
    let movieId = useParams();

    console.log('our id', movieId);
    
    // dispatch({ type: 'FETCH_INDIVIDUAL', payload: {} });
    const details = useSelector(store => store.genres);
    console.log('details', details);


    
    useEffect(() => {
        // dispatch({ type: 'FETCH_INDIVIDUAL_GENRES', payload: movieId.id });
        dispatch({ type: 'FETCH_MOVIE_GENRES', payload: movieId.id });
    }, []);

    return (
        <div className="movie-container">
            {details.id}
            {details.title}
            {/* <h1>{genres[0].title}</h1> 
            <h3>{genres[0].description}</h3>  */}
            {/* {genres.action.id}
            {genres.action.title}
            {genres.action.poster}
            {genres.genre?.map(movie => {
                return (
                    <div key={movie.id} >
                        <h3>{movie.title}</h3>
                        <img src={movie.poster} alt={movie.title}/>
                    </div>
                );  
            })} */}
        </div>
        // <main>
        //     {/* <h1>MovieList</h1>
        //     <section className="movies">
        //         {movies.map(movie => {
        //             return (
        //                 <div key={movie.id} >
        //                     <h3>{movie.title}</h3>
        //                     <img src={movie.poster} alt={movie.title}/>
        //                 </div>
        //             );
        //         })}
        //     </section> */}
        // </main>

    );
}

export default Details;