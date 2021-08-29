import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './details.css'
import {useParams} from'react-router-dom';

function Details() {

    const dispatch = useDispatch();
    let movieId = useParams();

    console.log('our id', movieId);
        console.log('got into details');
    // dispatch({ type: 'FETCH_INDIVIDUAL', payload: {} });
    const details = useSelector(store => store.movie);
    const genres = useSelector(store => store.genres);

    console.log('details', details);
    console.log('generes', genres);

    useEffect(() => {
        // dispatch({ type: 'FETCH_INDIVIDUAL_GENRES', payload: movieId.id });
        dispatch({ type: 'FETCH_INDIVIDUAL_GENRES', payload: movieId.id });
    }, []);

    return (
        <>
        </>
        // <div className="movie-container">
        //     {details.name}
        //     {details.title}
        //     {details?.map(movie => {
        //         return (
        //             <div key={movie.name} >
        //                 <h3>{movie.name}</h3>
        //                 {/* <img src={movie.poster} alt={movie.title}/>d */}
        //             </div>
        //         );  
        //     })} 
        // </div>
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