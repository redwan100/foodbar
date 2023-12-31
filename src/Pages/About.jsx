import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";


const About = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-md">
 
      <div className="flex justify-center">
        {user &&
          (user.photoURL ? (
            <img
              src={user?.photoURL}
              alt="user image"
              className="rounded-full h-24 w-24"
            />
          ) : (
            <FaRegUserCircle size={30} />
          ))}
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{user?.displayName}</h2>
        <p className="text-gray-600">{user?.email}</p>
      </div>
    </div>
  );
};

export default About;
