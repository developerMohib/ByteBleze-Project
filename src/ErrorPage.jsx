import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="font-bold text-5xl flex justify-center items-center min-h-screen">Oops</h1>
            <Link to='/' > Go to Home </Link>
        </div>
    );
};

export default ErrorPage;