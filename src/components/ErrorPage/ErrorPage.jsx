import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center font-bold text-5xl">
            <h1>opps !!</h1>
            <Link className="btn bg-orange-300 hover:bg-red-300 " to="/">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;