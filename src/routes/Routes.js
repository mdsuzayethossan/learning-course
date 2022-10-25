import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error-page";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layouts/Main";

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
    ],
  },
]);
