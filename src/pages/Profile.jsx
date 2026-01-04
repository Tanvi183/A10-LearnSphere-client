import React from "react";
import { FaUserAlt, FaEnvelope, FaRegAddressCard } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  useTitle("Profile");
  const { user } = useAuth();
  console.log(user);

  const axiosInstance = useAxiosSecure();

  const { data: profileData = {}, isLoading } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosInstance.get(`/users?email=${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <div className="mx-10">Loading profile...</div>;
  }

  return (
    <div className="mx-10">
      <h1 className="text-2xl font-semibold my-6">My Profile</h1>

      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={profileData.photo || user.photoURL}
                  alt="User Avatar"
                />
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold mb-2">
                Name: {profileData.name || user.displayName}
              </h2>
              <p className="text-gray-500 flex items-center gap-2 justify-center sm:justify-start mb-4">
                <FaEnvelope />
                Email : {profileData.email || user.email}
              </p>
              <p className="text-gray-500 flex items-center gap-2 justify-center sm:justify-start">
                <FaRegAddressCard />
                Address : {profileData.address || "No address provided"}
              </p>
            </div>
          </div>

          <div className="divider"></div>

          {/* Profile Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <FaUserAlt className="text-primary" />
              <span className="font-medium">Account Type:</span>
              <span>{profileData.role || "User"}</span>
            </div>

            {/* <div className="flex items-center gap-3">
              <span className="font-medium">Status:</span>
              <span
                className={`badge ${
                  status === "active" ? "badge-success" : "badge-error"
                }`}
              >
                {status}
              </span>
            </div> */}

            <div className="flex items-center gap-3">
              <span className="font-medium">Joined:</span>
              <span>
                {profileData.createdAt
                  ? new Date(profileData.createdAt).toLocaleDateString()
                  : "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
