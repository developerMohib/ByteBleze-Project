
import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Blogs from "../Component/Blogs/Blogs";
import Booksmarks from "../Component/Booksmarks/Booksmarks";
import HeaderFooter from "../Component/HeaderFooter/HeaderFooter";
import ErrorPage from "../ErrorPage";
import SingleBlog from "../Component/SingleBlog/SingleBlog";
import Author from "../Component/Author/Author";
import Content from "../Component/Content/Content";



export const router = createBrowserRouter([
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
          path: '/blog/:id',
          element: <SingleBlog> </SingleBlog>,
          loader: async ({params}) => {
            return fetch(`https://dev.to/api/articles/${params.id}`);
          },
          children: [
            {
              index: true,
              element: <Content> </Content>,
            },
            {
              path: 'author',
              element: <Author> </Author>,
            },
          ]
        },
        {
          path: '/booksmarks',
          element: <Booksmarks> </Booksmarks>
        }
      ]
    },
  ]);