import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllCourses from "../pages/AllCourses";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../components/Shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "courses",
        element: <AllCourses />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  { path: "*", element: <ErrorPage /> },
]);

export default router;
