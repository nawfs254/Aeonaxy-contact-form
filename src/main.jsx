import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import FormPage from './pages/FormPage';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <FormPage></FormPage>,
        children: [
          {
            path: "/login",
            element: <Login></Login>
          }
        ]
      },
      {
        path: "/signup",
        element: <FormPage></FormPage>,
        children: [
          {
            path: "/signup",
            element: <SignUp></SignUp>,
            loader: () => fetch('https://restcountries.com/v3.1/all')
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
