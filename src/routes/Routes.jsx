import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllCourses from "../pages/AllCourses";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../components/Shared/ErrorPage";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import DeshboardLayout from "../layouts/DeshboardLayout";
import Deshboard from "../pages/Dashboard";
import CourseDetails from "../pages/CourseDetails";
import MyEnrollments from "../pages/MyEnrollments";

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
      {
        path: "coursesDetails/:id",
        element: (
          <PrivateRoute>
            <CourseDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DeshboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Deshboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "enrolled-courses",
        element: <MyEnrollments />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
