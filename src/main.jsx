import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "./index.css";
import Main from './Layout/Main.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home.jsx';
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog.jsx';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';




const router = createBrowserRouter([
 
 {
  path: "/",
  element: <Main></Main>,
  children: [
    {
      path: "/",
      element: <Home></Home>,
      // loader: () => fetch('t-shirt.json'),
    },
    
    {
      path: "/statistics",
      element: <Statistics></Statistics>,
    },
    {
      path: "/blog",
      element: <Blog></Blog>,
    },
    {
      path: "/applied",
      element: <AppliedJobs></AppliedJobs>
    },
  ]
 },

    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
