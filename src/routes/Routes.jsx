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
import Blogs from "../pages/Blogs";
import ContactPage from "../pages/ContactPage";
import DeshboardLayout2 from "../layouts/DeshboardLayout2";
import DashboardHome from "../pages/Deshboard/DashboardHome";
import Dashboard from "../pages/Dashboard";

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
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: <ContactPage />,
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
        element: <CourseDetails />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DeshboardLayout2 />
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <DashboardHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "enrolled-courses",
        element: <MyEnrollments />,
      },
      {
        path: "my-courses",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
