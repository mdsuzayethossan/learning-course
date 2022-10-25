import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error-page";
import Main from "../layouts/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{}],
  },
]);
