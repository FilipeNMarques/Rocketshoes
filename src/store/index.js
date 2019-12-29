import { createStore } from 'redux';

// Root Reducers (Like a routes from deducers)
import rootRecuder from './modules/rootRecuder';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootRecuder, enhancer);

export default store;
