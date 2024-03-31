import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div>
      <div>
        <h1 className="font-bold text-5xl">Oops</h1>
      </div>
      
      <div>
        <Link to="/">
          {" "}
          <button className=" btn btn-outline"> Go to Home </button>{" "}
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ErrorPage;
