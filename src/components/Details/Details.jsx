import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './details.css'
import {useParams} from'react-router-dom';

function Details() {

    const dispatch = useDispatch();
    let movieId = useParams();

    console.log('our id', movieId.id);
    
    // dispatch({ type: 'FETCH_INDIVIDUAL', payload: {} });
    const genres = useSelector(store => store.genres);
    console.log('genres', genres);


    
    useEffect(() => {
        dispatch({ type: 'FETCH_INDIVIDUAL', payload: movieId.id });
    }, []);

    return (
        <>
            <h1>hey</h1>
        </>
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