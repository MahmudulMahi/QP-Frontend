import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Common/Login/Login";
import Registration from "../Pages/Common/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
    
  },
  {path:'/login',element:<Login></Login>},
  {path:'/registration',element:<Registration></Registration>}
]);