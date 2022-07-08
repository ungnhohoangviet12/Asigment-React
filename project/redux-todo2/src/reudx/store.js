import { createStore } from 'redux';
import rootReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

const ehandle = composeWithDevTools();

const store = createStore(rootReducers, ehandle);

export default store;