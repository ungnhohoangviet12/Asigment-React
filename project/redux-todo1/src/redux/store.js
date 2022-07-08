import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composeEnhancers);

// có 3 tham số, rooReducer, initValue, ehandcer (middware(redux saga))

export default store;