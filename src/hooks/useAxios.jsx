import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://learnsphere-online-learning-platfor.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
