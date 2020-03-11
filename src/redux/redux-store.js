import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import networksReducer from './reducerNetworks';
import stationsReducer from './reducerStations';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  reducer: networksReducer,
  stationsReducer: stationsReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
window.__store__ = store;


window.store = store;

export default store;
