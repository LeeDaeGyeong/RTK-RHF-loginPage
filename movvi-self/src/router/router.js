import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

export default router;
