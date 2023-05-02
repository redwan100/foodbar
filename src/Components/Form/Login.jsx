import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[80%] sm:w-[50%] md:w-[40%] mx-auto">
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Login
          </button>
        </div>
        <p className="text-red-500 my-2">firebase error</p>

        <p>Don't have an account? <Link to={'/register'} className='text-blue-500 hover:underline'>Register</Link> </p>
      </form>
    </div>
  );
}

export default Login