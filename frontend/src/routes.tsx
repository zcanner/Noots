import { createBrowserRouter } from "react-router-dom";
import { Bar } from "./lib/loadingBar/bar";
/**
 * Define the routes for the application.
 */
const routes = [
  {
    path: "/",
    element: <Bar />,
  },
];

const router = createBrowserRouter(routes);

export default router;
