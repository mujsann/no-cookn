import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

const store;

if (process.env.NODE_ENV === 'production') {
store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare)
  )
);
} else {
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleWare),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(applyMiddleware(...middleWare))
// );

export default store;
