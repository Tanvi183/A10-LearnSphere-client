import React, { use, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // console.log(location);

  const { signInWithGoogle, signInUser } = use(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);

        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        // Create user in the mongodb databse
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success(`Welcome, ${data.displayName || "User"}!`);
            navigate(`${location.state ? location.state : "/dashboard"}`);
            console.log("data after user save", data);
          });
      })
      .catch((error) => handleAuthError(error));
  };

  // Email Password Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome, ${user.displayName || "User"}!`);
        navigate(`${location.state ? location.state : "/dashboard"}`);
      })
      .catch((error) => handleAuthError(error));
  };

  // Common Error
  const handleAuthError = (error) => {
    if (error.code === "auth/invalid-email") {
      toast.error("Invalid email format. Please check your email.");
    } else if (error.code === "auth/user-not-found") {
      toast.error("No account found with this email. Please sign up first.");
    } else if (error.code === "auth/wrong-password") {
      toast.error("Incorrect password. Please try again.");
    } else if (error.code === "auth/user-disabled") {
      toast.error("This account has been disabled. Contact support.");
    } else if (error.code === "auth/too-many-requests") {
      toast.error("Too many failed attempts. Try again later, Bhai 😅");
    } else if (error.code === "auth/network-request-failed") {
      toast.error("Network error. Please check your internet connection.");
    } else if (error.code === "auth/invalid-credential") {
      toast.error("Invalid credentials. Please check your email and password.");
    } else {
      toast.error(
        error.message || "An unexpected error occurred. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base px-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Welcome back!
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Hey there! Ready to log in? Just enter your username and password
          below and you’ll be back in action in no time. Let’s go!
        </p>

        <button
          onClick={handleGoogleSignIn}
          aria-label="Sign in with Google"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition text-black"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4 text-left">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-1"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
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
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-[28px] top-[32px] cursor-pointer z-50"
            >
              {show ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-indigo-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md transition cursor-pointer"
          >
            Sign In <FaArrowRight />
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
