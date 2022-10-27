import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error-page";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "../components/Register";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Details from "../pages/Courses/Details";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () =>
          fetch("https://assignment-server-delta.vercel.app/courses"),
      },
      {
        path: "/course/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-server-delta.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-server-delta.vercel.app/course/${params.id}`
          ),
      },
    ],
  },
]);
