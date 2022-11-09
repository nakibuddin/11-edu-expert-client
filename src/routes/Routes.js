import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/home/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Services from "../pages/Services/Services";

const my_router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [

        {path: '/', element: <Home></Home>},
        {path: '/services', element: <Services></Services>},
        {path: '/blog', element: <Blog></Blog>},
        {path: '*', element: <PageNotFound></PageNotFound>}        
    ] },     
]);

export default my_router;