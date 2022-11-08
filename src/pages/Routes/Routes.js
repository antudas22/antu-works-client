import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import AllServices from "../Home/Services/AllServices";
import Login from "../Login/Login";
import Register from "../Register/Register";

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
      ]
    }
  ])

  export default router;