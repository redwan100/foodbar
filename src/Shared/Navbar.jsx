import React from 'react'
import { NavLink } from 'react-router-dom'

const headerData = [
    {
        name:'Home',
        path:'/'
    },
    {
        name:'About',
        path:'/about'
    },
]


const Navbar = () => {
    const link = headerData.map((item,i)=><NavLink key={i} to={item.path} className={({isActive})=>isActive&&'text-red-500'} >{item.name}</NavLink>)
  return (
    <div>
      {/* <div>logo</div>
        <div>{link}</div>
        <button className='btn btn-sm'>Login</button> */}

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
          <NavLink className="btn btn-ghost normal-case text-xl" to={"/"}>
            daisyUI
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 space-x-3 text-lg">
            {link}
          </div>
        </div>
        <div className="navbar-end">
          <NavLink className="btn btn-success btn-sm md:btn-md">Log in</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar