import React from 'react'
import Lottie from "lottie-react";
import loading from "../../public/loading-animation.json";

const LoadingSpinner = () => {
  return (
    <div className='min-h-screen w-full'>
      <div className="max-w-md mx-auto">
        <Lottie animationData={loading} loop={true} />
      </div>
    </div>
  );
}

export default LoadingSpinner