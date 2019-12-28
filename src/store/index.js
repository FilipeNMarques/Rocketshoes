import { createStore } from 'redux';

// Root Reducers (Like a routes from deducers)
import rootRecuder from './modules/rootRecuder';

const store = createStore(rootRecuder);

export default store;
