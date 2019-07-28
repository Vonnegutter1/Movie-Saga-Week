import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import Axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies)
    yield takeEvery('FETCH_DETAILS', fetchDetails)
}
 
function* fetchMovies() {
    try {
        //Save the response from the serrver in a variable
        const response = yield Axios.get('/list');
        // Then we can pass the response data to the reducer
        yield put({ type: 'SET_MOVIES', payload: response.data })
    } catch (error) {
        console.log('Error getting movies', error);
        alert('Could not get movies. Read a book.')
    }
}

function* fetchDetails(action) {
    try {
        //Save the response from the server in a variable
        // Using /list to connect to the server and router
        const response = yield Axios.get(`/list/${action.payload}`);

        // Then we can pass the response data to the reducer
        yield put({ type: 'SET_DETAILS', payload: response.data })
    } catch (error) {
        console.log('Error getting details', error);
        alert('Could not get details. Try again later.')
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
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
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
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
