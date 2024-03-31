import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="md:h-[80vh] flex justify-center items-center">
      <div className=" text-center md:w-2/5 mx-auto space-y-5">
        <h1 className="text-5xl font-bold">Welcome to <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient " >ByteBlaze</span> </h1>
        <p>ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
        <Link to = '/blogs' > <button className="btn btn-outline mx-3">Read Blog</button> </Link>
        <Link to = '/booksmarks' > <button className="btn btn-outline mx-3">BooksMarks</button> </Link>
      </div>
    </div>
  );
};

export default Home;
