import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Blog = ({ blog }) => {
  const { cover_image, description, published_timestamp, slug,published_at,id, title } = blog;
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 shadow-lg rounded-lg">
      <div className="container p-2 mx-auto space-y-6 sm:space-y-12">
        <div className="">
          <Link
            to = {`/blog/${id}`}
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={cover_image}
            />
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {title}
              </h3>
              <span className="text-xs dark:text-gray-600">
                {new Date(published_at).toLocaleDateString()}
              </span>
              <p>
                {description}
              </p>
              <span className="text-xs dark:text-gray-600">
                {new Date(published_timestamp).toLocaleDateString()}
              </span>
              <span> {slug} </span>
            </div>
          </Link> 
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
