import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import AllServices from "../Home/Services/AllServices";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import MyReviews from "../../pages/MyReviews/MyReviews";
import MyServices from "../MyServices/MyServices";
import Blog from "../Blog/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/services',
            element: <AllServices />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/service/:id',
            element: <ServiceDetails />,
            loader: ({params}) => fetch(`https://antu-works-server.vercel.app/service/${params.id}`)
        },
        {
          path: '/myreviews',
          element: <PrivateRoute><MyReviews /></PrivateRoute>
        },
        {
          path: '/myservices',
          element: <PrivateRoute><MyServices /></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blog />
        }
      ]
    }
  ])

  export default router;