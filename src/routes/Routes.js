import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/home/Home/Home";
import Services from "../pages/Services/Services";

const my_router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [

        {path: '/', element: <Home></Home>},
        {path: '/services', element: <Services></Services>},
        
    ] },     
]);

export default my_router;