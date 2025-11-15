import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import useTitle from "../hooks/useTitle";

const Profile = () => {
  const { user } = use(AuthContext);
  useTitle("Profile");

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-500 text-sm">Loading profile...</p>
      </div>
    );
  }

  const { displayName, email, role } = user;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 max-w-5xl mx-auto border border-gray-100">
      {/* Profile Info */}
      <div className="space-y-4 text-sm">
        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
          <span className="w-40 text-gray-500 font-medium">Full Name</span>
          <span className="text-gray-800 leading-relaxed">{displayName}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
          <span className="w-40 text-gray-500 font-medium">Email</span>
          <span className="text-gray-800 leading-relaxed">{email}</span>
        </div>

        {role && (
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
            <span className="w-40 text-gray-500 font-medium">Role</span>
            <span className="text-gray-800 leading-relaxed capitalize">
              {role}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
