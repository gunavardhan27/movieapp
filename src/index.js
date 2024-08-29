import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MovieDescription from './components/MovieDescription';
import {Provider} from 'react-redux'
import store from './store/Red';
import SearchBar from './components/SearchBar';
import Favourites from './components/Favourites';
const routes = createBrowserRouter([
  {
    path:'/',
    element:<App />,

  },
  {
    path:'/description/:id',
    element:<MovieDescription />
  },
  {
    path:'search',
    element:<SearchBar />
  },
  {
    path:'favourites',
    element:<Favourites />
  }
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>

    <RouterProvider router={routes} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
