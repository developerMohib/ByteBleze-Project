// import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Component/Home/Home";
import Blogs from "./Component/Blogs/Blogs";
import Booksmarks from "./Component/Booksmarks/Booksmarks";
import HeaderFooter from "./Component/HeaderFooter/HeaderFooter";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooter> </HeaderFooter>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home> </Home>
      },
      {
        path: '/blogs',
        element: <Blogs> </Blogs>,
        loader: async () => {
          return fetch(`https://dev.to/api/articles?per_page=5&&top=7`);
        },
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
