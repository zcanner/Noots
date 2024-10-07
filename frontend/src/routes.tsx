import { createBrowserRouter } from "react-router-dom";

/**
 * Define the routes for the application.
 */
const routes = [
  {
    path: "/",
    element: <a href="https://github.com/zcanner">GitHub</a>,
  },
];

const router = createBrowserRouter(routes);

export default router;
