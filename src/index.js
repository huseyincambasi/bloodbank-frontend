import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { Whole } from './components/Whole';

const initialState={input: 
  {
        site:<Whole/>
  },
}

function reducer(state=initialState,action){
  switch(action.type){
    case 'CHANGETYPE':
      return {...state,site:action.newsite};
      default:
        return state;
  }
}

const store=configureStore({reducer:reducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);