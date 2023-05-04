import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import { BiUserCircle } from "react-icons/bi";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="bg-white shadow rounded-lg p-6 max-w-xs mx-auto">
        <div className="flex justify-center">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="user image"
              className="rounded-full h-24 w-24"
            />
          ) : (
            <BiUserCircle />
          )}
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">{user?.displayName}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
