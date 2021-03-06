import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(){
  return createStore(
    rootReducer,
    composeWithDevTools(
    applyMiddleware(thunk, reduxImmutableStateInvariant()))
  )
};
