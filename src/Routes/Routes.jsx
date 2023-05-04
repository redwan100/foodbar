import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Chef from "../Pages/Chef";
import ChefDetails from "../Components/ChefDetails";
import Register from "../Components/Form/Register";
import Login from "../Components/Form/Login";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Error from "../Pages/Error";
import Blog from "../Pages/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "chef",
        element: <Chef />,
        loader: () => fetch("http://localhost:5000/category"),
      },
      {
        path: "chefItem/:id",
        element: (
          <PrivetRoute>
            <ChefDetails />,
          </PrivetRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
]);

export default router