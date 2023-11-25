import React from "react";
import {
  createBrowserRouter, Navigate,
  RouterProvider,
} from 'react-router-dom'
import Home from './components/Home/Home'
import Details from './components/Details/Details'

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path:"/:id",
      element: <Details/>
    },
    {
      path: '*',
      element: <Navigate to='/home' />
    }
  ]);

  return (
    <div className="App">
    <RouterProvider router={router} />
   </div>
  );
}
export default App;
