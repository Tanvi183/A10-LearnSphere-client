import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import router from "./routes/Routes.jsx";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    <Toaster position="top-right" reverseOrder={false} />
  </StrictMode>
);
