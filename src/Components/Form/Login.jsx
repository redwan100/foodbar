import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
const [error, setError] = useState("");
// ========= Context ========
const { user, userSignIn } = useContext(AuthContext);

const navigate = useNavigate();
const location = useLocation();

const from = location?.state?.from?.pathname || "/";

// =========== Handle Form ===========
const handleLogin = (event) => {
  event.preventDefault();
  // Error reset
  setError("");
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;


  userSignIn(email, password)
    .then((result) => {
      const user = result.user;
      navigate(from, { replace: true });
      form.reset();
    })
    .catch((err) => setError(err.message));
};
  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[80%] sm:w-[50%] md:w-[40%] mx-auto" onSubmit={handleLogin}>
        <h1 className="text-center text-3xl font-semibold mb-4">Sign In</h1>

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
            type="submit"
          >
            Login
          </button>
        </div>
        <p className="text-red-500 my-2">{error}</p>

        <p>
          Don't have an account?{" "}
          <Link to={"/register"} className="text-blue-500 hover:underline">
            Register
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Login