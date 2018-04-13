import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducer/rootReducer';
import thunk from 'redux-thunk';


 const middleWare = [thunk];

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare)
    )
    
);

export default store;