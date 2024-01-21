import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddArticle from "../pages/AddArticle/AddArticle";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Subscription from "../pages/Subscription/Subscription";
import AllArticle from "../pages/AllArticle/AllArticle";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Home/Secret";


const router= createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'addArticle',
            element:<AddArticle></AddArticle>
        },
        {
            path:'subscription',
            element:<Subscription></Subscription>
        },
        {
            path:'allArticle',
            element:<AllArticle></AllArticle>
        },
        {
            path:'secret',
            element:<PrivateRoute><Secret></Secret></PrivateRoute>
        },

    ]
   }

])
export default router;