import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 1 - configuracao do router

// importo as paginas que quero
import { Home} from './routes/Home';
import { Contact } from './routes/Contact';


// add como argumento no creatBrows os componentes que quero
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const rotas = createBrowserRouter([
  {
  path: '/',
  element: <Home></Home> 
  },
  {
    path: 'contact',
    element: <Contact></Contact>
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={rotas}></RouterProvider> */}
    <App></App>
  </React.StrictMode>
);


