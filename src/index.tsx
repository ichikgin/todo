import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/SCSS/normalize.scss'
import './assets/SCSS/style.scss'

import {ToDoListPage} from './pages/ToDoListPage';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDoListPage/>
  </React.StrictMode>
);