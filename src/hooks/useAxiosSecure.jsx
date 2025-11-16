import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "https://learnsphere-online-learning-platfor.vercel.app",
});

const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  // request interceptor
  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
      const token = user.accessToken;
      if (token) {
        config.headers.authorization = `Bearer ${user.accessToken}`;
      }
      return config;
    });

    // response interceptor
    const responseinterceptor = instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        // console.log(err);
        const status = err.status;
        if (status === 401 || status === 403) {
          console.log("log out the user for bad request");
          signOutUser().then(() => {
            navigate("/register");
          });
        }
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.request.eject(responseinterceptor);
    };
  }, [user, signOutUser, navigate]);

  return instance;
};

export default useAxiosSecure;
