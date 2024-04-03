import { Outlet, useLoaderData } from "react-router-dom";
import Tabs from "./Tabs/Tabs"; 

const SingleBlog = () => {
  const singleBlog = useLoaderData();
const {title, reading_time_minutes, positive_reactions_count, readable_publish_date,comments_count } = singleBlog;
  return (
    <div>
      <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
              <div className="flex items-center md:space-x-2">
                
                <p className="text-sm">{reading_time_minutes} min read • {readable_publish_date} </p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {comments_count} comments • {positive_reactions_count} views
              </p>
            </div>
          </div>
          <div className="dark:text-gray-800">
            <Tabs> </Tabs>
            <Outlet> </Outlet>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SingleBlog;
