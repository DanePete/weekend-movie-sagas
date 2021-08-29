import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovie);
    yield takeEvery('FETCH_MOVIE_GENRES', fetchMovieGenres);
    yield takeEvery('FETCH_INDIVIDUAL_GENRES', fetchIndividualGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
}

function* fetchMovie(action) {
    try {
        console.log('action.payload.id', action.payload.id);
        const movieDetails = yield axios.get(`/api/movie/${action.payload.id}`, {params: {id: action.payload.id}});
        console.log('this is our movie details', movieDetails);
        yield put({ type: 'SET_MOVIE_DETAILS', payload: movieDetails });
    } catch {
        console.log('get all error');
    }
}

function* fetchMovieGenres(action) {
    try {
        const genre = yield axios.get(`/api/genre`);
        yield put({ type: 'SET_GENRES', payload: genre.data });
    } catch {
        console.log('get all error');
    }
}

function* fetchIndividualGenres(action) {
    try {
        console.log('action.payload.id GENRE', action.payload.id);
        const genre = yield axios.get(`/api/genre/${action.payload}`, {params: {id: action.payload.id}});
        yield put({ type: 'SET_GENRES', payload: genre.data });
    } catch {
        console.log('get all error');
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
}

function* addMovie(action) {
    try {
        yield axios.post('api/movie', action.payload);
        fetchAllMovies();
    } catch (err) {
        console.log('createMovie error', err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            console.log('got in here to genres state store', action.payload);
            return action.payload;
        default:
            return state;
    }
}

const movie = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            console.log('got in here individual movie state store', action.payload);
            return action.payload;
        default:
            return state;
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
