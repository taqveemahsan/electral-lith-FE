import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600">Page not found.</p>
      <Link
        to="/"
        className="text-blue-500 hover:underline"
        activeClassName="text-red-500" // This is how to style the active state
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
