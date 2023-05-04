import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast'

const Register = () => {
const [error, setError] = useState('')
  // ========= Context ========
  const { user, createUser,googleLogin,githubLogin, userNameUpdate } = useContext(AuthContext);


  // =========== Handle Form ===========
  const handleSubmit = (event) => {
    event.preventDefault()
    // Error reset 
    setError('')
    const form = event.target;
    const userName = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;


    createUser(email, password)
    .then((result)=>{
      const user = result.user;
      profileUpdate(user, userName,photoUrl)
      toast.success('User successfully created')
      form.reset()
    })
    .catch((err)=>setError(err.message))
  }


const profileUpdate =(user, userName,photoUrl)=>{
  userNameUpdate(user, userName, photoUrl)
    .then(() => {
    })
    .catch((err) => setError(err.message));
}


const handleGoogleLogin = () =>{
  googleLogin()
  .then((result)=>{
    const loggedIn = result.user;
    toast.success('Successfully login')

  })
  .catch((error)=>setError(error.message))
}
const handleGithubLogin = () =>{
  githubLogin()
    .then((result) => {
      const loggedIn = result.user;
      toast("Successfully login");
    })
    .catch((error) => setError(error.message));
}

  return (
    <div className="content-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-semibold mb-4">Sign Up</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            required
            name="email"
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
            required
            name="password"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="photo-url"
          >
            Photo Url
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photo-url"
            type="text"
            placeholder="Photo url"
            name="photoUrl"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Register
          </button>
        </div>
        <p className="text-red-500 my-2">{error}</p>

        {/* Google or Github  */}
        <div className="relative w-full h-[2px] bg-slate-200 my-4">
          <span className="absolute -top-[.90rem] bg-white rounded-full text-lg font-medium left-[50%] -translate-x-[50%] w-4 h-4 z-20">
            or
          </span>
        </div>
        <div className="space-y-2">
          <button
            className="btn btn-outline w-full"
            onClick={handleGoogleLogin}
          >
            <AiOutlineGoogle size={20} />
            Login with Google
          </button>
          <button
            className="btn border-gray-800 w-full"
            onClick={handleGithubLogin}
          >
            <AiFillGithub size={20} />
            Login with Github
          </button>
        </div>

        <p className="mt-3">
          Already account?{" "}
          <Link to={"/login"} className="text-blue-500 hover:underline">
            Login
          </Link>{" "}
        </p>

      </form>
    </div>
  );
}

export default Register