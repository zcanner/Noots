import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.page.tsx";

/**
 * Define the routes for the application.
 */
const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

export default router;
