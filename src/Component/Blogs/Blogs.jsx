
import Blog from '../Blog/Blog';
import { Link, useLoaderData } from 'react-router-dom';

const Blogs = () => {
    const blogs = useLoaderData();
    console.log(blogs,'blogs');
    const { id } = blogs;
    return (
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          to={`blog${id}`}
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src={blogs[0].cover_image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {blogs[0].slug}
            </h3>
            <span className="text-xs dark:text-gray-600">
              {blogs[0].published_timestamp}
            </span>
            <p>
              {blogs[0].description}
            </p>
            <span className="text-xs dark:text-gray-600">
                {/* {new Date().toLocaleDateString()} */}
                {blogs[0].published_at}
              </span>
          </div>
        </Link>
        <div className="md:grid grid-cols-3 gap-8 justify-center">
          {
            blogs.map(blog => <Blog key={blog.id} blog={blog} > </Blog> )
          }
        </div>
      </div>
    );
};

export default Blogs;
