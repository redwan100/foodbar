import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Chef from "../Pages/Chef";
import ChefDetails from "../Components/ChefDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "chef",
        element: <Chef />,
        loader: () => fetch("http://localhost:5000/category"),
      },
      {
        path: "chefItem/:id",
        element: <ChefDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
]);

export default router