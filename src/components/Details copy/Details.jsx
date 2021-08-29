import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './details.css'
import {useParams} from'react-router-dom';

function Details() {
    const genres = useSelector(store => store.genres);

    
    return (
        <>
            {genres.action.title}
            {genres.action.poster}
        </>
        // <div className="movie-container">
        //     {genres.action.id}
        //     {/* {genres.action.title}
        //     {genres.action.poster} */}
        //     {/* {genres.genre?.map(movie => {
        //         return (
        //             <h1>{movie}</h1>
        //         );  
        //     })} */}
        // </div>
    );
}

export default Details;