import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorImg from "../../public/404-error-animation.json";

const Error = () => {
  const {error, status} = useRouteError();
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto space-y-4">
        <div className="space-y-4 mb-8 text-center">
          <h1 className="text-6xl font-bold text-red-500 sm:text-9xl">{status}</h1>
          <p className="text-2xl font-semibold">{error.message}</p>
          <Lottie animationData={errorImg} loop={true} />
        </div>

        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
