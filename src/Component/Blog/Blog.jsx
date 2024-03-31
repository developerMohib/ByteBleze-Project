
const Blog = ( {blog} ) => {
  const {bookName,image,review,publisher} = blog;
    return (
        <div> 
        <div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> {bookName} </h2>
              <p className='text-xl'> {review} </p>
              <p className='text-xl'> {publisher} </p>
              <div className="card-actions">
                <button className="btn btn-primary"> Read More </button>
              </div>
            </div>
          </div>
        </div>
          </div>
    );
};

export default Blog;