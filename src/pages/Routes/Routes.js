import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import AllServices from "../Home/Services/AllServices";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import MyReviews from "../../pages/MyReviews/MyReviews";

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
            loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path: '/myreviews',
          element: <MyReviews />
        }
      ]
    }
  ])

  export default router;