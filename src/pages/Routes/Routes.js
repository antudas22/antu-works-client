import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import AllServices from "../Home/Services/AllServices";

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
        }
      ]
    }
  ])

  export default router;