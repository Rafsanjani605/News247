import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../login/Login";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home.js/Home";
import News from "../Pages/News/News";
import PrivateRoutes from "../Privateroutes/PrivateRoutes";
import Registration from "../registration/Registration";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
           {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:1000/news')
           },
           {
            path: '/category/:id',
            loader: ({params}) => fetch(`http://localhost:1000/category/${params.id}`),
            element: <Category></Category>
           },
           {
            path: '/news/:id',
            //new/:id and after params id is same
            element: <PrivateRoutes><News></News></PrivateRoutes>,
            loader : ({params}) => fetch(`http://localhost:1000/news/${params.id}`)
           },
           {
            path: '/login',
           element: <Login></Login>
           },
           {
            path: '/signup',
            element: <Registration></Registration>
           }
            
        ]
    }
])