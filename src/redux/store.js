import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import Reactotron from '../ReactotronConfig';
const store = createStore(
  rootReducer,
  // eslint-disable-next-line prettier/prettier
  compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
);
export default store;
