import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error-page";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layouts/Main";
import Courses from "../pages/Courses/Courses";
import Details from "../pages/Courses/Details";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/skill-category/:id",
        element: <Details></Details>,
      },
    ],
  },
]);
