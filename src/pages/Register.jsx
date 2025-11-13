import React, { use, useState } from "react";
import { FaArrowRight, FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // --- Password Validation ---
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

    if (!hasUpperCase) {
      setError("Password must include at least one uppercase letter (A–Z).");
      return;
    }

    if (!hasLowerCase) {
      setError("Password must include at least one lowercase letter (a–z).");
      return;
    }

    if (!isValidLength) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please re-enter.");
      return;
    }

    // --- Firebase User Creation ---
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // --- Update Firebase Profile ---
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // Update local user state
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
            });

            // Create user object for MongoDB
            const newUser = {
              name: name,
              email: email,
              photo: photo,
              // uid: user.uid, // store Firebase UID if you want to link users
              // createdAt: new Date(),
            };

            //Send user data to MongoDB
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("User saved to MongoDB:", data);
                toast.success(`Welcome, ${data.name || "User"}!`);

                // Redirect after saving to database
                navigate("/profile");
              })
              .catch((err) => {
                console.error("Error saving user in MongoDB:", err);
                toast.error("Failed to save user in database.");
              });
          })
          .catch((error) => {
            console.error("Profile update error:", error);
            toast.error("Profile not updated. Try again.");
          });
      })
      .catch((error) => {
        // --- Firebase Error Handling ---
        if (error.code === "auth/email-already-in-use") {
          toast.error("User already exists in the database.");
        } else if (error.code === "auth/weak-password") {
          toast.error("Password must be at least 6 characters long.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Wrong password. Please try again.");
        } else if (error.code === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (error.code === "auth/operation-not-allowed") {
          toast.error("Operation not allowed. Please contact support.");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error(error.message || "An unexpected error occurred.");
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Create your account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Join us today! Fill in the details below to get started.
        </p>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form onSubmit={handleRegister}>
          <div className="mb-4 text-left">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-semibold mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="name"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          <div className="mb-4 text-left">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          <div className="mb-4 text-left">
            <label
              htmlFor="photo"
              className="block text-gray-700 font-semibold mb-1"
            >
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              id="photo"
              placeholder="Photo Url"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          <div className="mb-4 text-left">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-1"
            >
              Password
            </label>
            <input
              name="password"
              type={show ? "text" : "password"}
              id="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-[28px] top-[32px] cursor-pointer z-50"
            >
              {show ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>

          <div className="mb-6 text-left">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-semibold mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Validation error */}
          {error && <p className="text-red-400 text-xs">{error}</p>}

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md transition"
          >
            Sign Up <FaArrowRight />
          </button>
        </form>

        {/* Already have account */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
