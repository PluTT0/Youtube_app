import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.state = store;

export default store;
export * from './actions';