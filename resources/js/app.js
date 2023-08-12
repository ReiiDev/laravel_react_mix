
import './bootstrap';

import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Router from './router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, } from 'redux';
import rootReducer from './store/store';
import thunk from 'redux-thunk';



const store = createStore(rootReducer, applyMiddleware(thunk));

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </Provider>
);