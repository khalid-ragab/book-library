import React from "react";
import Home from "./home";
import Details from "./Details";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:"/details",
      element: <Details/>
    }
  ]);
  return (
    <div className="App">
    <RouterProvider router={router} />
   </div>
  );
}
export default App;
