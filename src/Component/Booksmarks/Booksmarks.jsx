
import { Link } from "react-router-dom";

const Booksmarks = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className=" text-center md:w-2/5 mx-auto space-y-5">
        <h1 className="text-5xl font-bold">
          Welcome to <span>ByteBlaze</span>{" "}
        </h1>
        <Link to = '/blogs' > <button className="btn btn-outline mx-3">Read Blog</button> </Link>
      </div>
    </div>
  );
};

export default Booksmarks;
