import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

// combine reducers
import { todoReducer } from './reducers/reducers';
const combinedReducer = combineReducers({
    todos: todoReducer
});

// create redux store
const store = createStore(
    combinedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

