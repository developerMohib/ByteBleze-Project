
import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/books.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    console.log(blogs,'blogs')

    return (
        <div>
            <h2 className='text-center my-10' > This is From Blogs Page</h2>
            <div className='md:grid grid-cols-3 gap-4'>
            {
                blogs.map(blog => <Blog key={blog.bookId} blog={blog} > </Blog> )
            }
            </div>
        </div>
    );
};

export default Blogs;
