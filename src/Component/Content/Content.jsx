
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
const Content = (  ) => {
    const content = useLoaderData() ;
    const {description , tags} = content ;
    console.log(content, 'content from content page')
    return (
        <div>
            
        <div>
          <div className="flex flex-wrap py-6 gap-2 ">
            {
              tags.map(( tag , idc) => 
                <a key={idc}
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
                >
                  #{tag}
                </a>
              )
            }
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Related posts</h4>
            <p> {description} </p>
          </div>
        </div>
        </div>
    );
};
Content.propTypes = {
    content: PropTypes.object,
  };
export default Content;