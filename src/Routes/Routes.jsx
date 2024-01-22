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
import Secret from "../pages/Home/MyArticle";
import Dashboard from "../layouts/Dashboard/Dashboard";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import AddPublisher from "../pages/Dashboard/AddPublisher/AddPublisher";
import AllArticles from "../pages/Dashboard/AllArticles/AllArticles";


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
            path:'myArticle',
            element:<PrivateRoute><Secret></Secret></PrivateRoute>
        },

    ]
   },
   {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
        {
            path:'allUser',
            element:<AllUser></AllUser>
        },
        {
            path:'addPublisher',
            element:<AddPublisher></AddPublisher>
        },
        {
            path:'allArticle',
            element:<AllArticles></AllArticles>
        }
    ]
   }

])
export default router;