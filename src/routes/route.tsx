import App from "@/App";
import Login from "@/pages/login";
import Takes from "@/pages/takes";
import Users from "@/pages/users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Takes />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);

export default routes;
