import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import router from "./routes/Routes.jsx";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProvider>
  </StrictMode>
);
