// import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Component/Home/Home";
import Blogs from "./Component/Blogs/Blogs";
import Booksmarks from "./Component/Booksmarks/Booksmarks";
import HeaderFooter from "./Component/HeaderFooter/HeaderFooter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooter> </HeaderFooter>,
    children: [
      {
        path: '/',
        element: <Home> </Home>
      },
      {
        path: '/blogs',
        element: <Blogs> </Blogs>
      },
      {
        path: '/booksmarks',
        element: <Booksmarks> </Booksmarks>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    <RouterProvider router={router} />
  </>
);
