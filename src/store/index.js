import { createStore } from 'redux'

import rootReducer from './modules/rooReducer'

const store = createStore(rootReducer);

export default store;