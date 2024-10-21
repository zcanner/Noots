import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.page.tsx";
import Editor from "./pages/editor.page.tsx";

/**
 * Define the routes for the application.
 */
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:contactId",
    element: <Editor />,
  },
];

const router = createBrowserRouter(routes);

export default router;
