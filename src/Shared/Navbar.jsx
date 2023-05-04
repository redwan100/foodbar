import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import {GiForkKnifeSpoon} from 'react-icons/gi'

const headerData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const link = headerData.map((item, i) => (
    <NavLink
      key={i}
      to={item.path}
      className={({ isActive }) => (isActive ? "text-red-500" : "")}
    >
      {item.name}
    </NavLink>
  ));

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="fixed top-0 z-50 mx-[auto!important] w-full shadow-md">
      <div className="myContainer ">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <div className="space-y-3 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                {link}
              </div>
            </div>
            <NavLink
              className="btn btn-ghost normal-case text-xl hidden sm:block"
              to={"/"}
            >
              <img src="https://i.ibb.co/tD9hxF9/logo.png" alt="" />
            </NavLink>
            <Link to="/">
              <GiForkKnifeSpoon size={30} className="text-red-500 sm:hidden" />
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal px-1 space-x-3 text-lg">
              {link}
            </div>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8">
                  <img
                    className="w-full h-full rounded-full ring"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Log out
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Log in
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
