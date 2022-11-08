import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/home/Home/Home";

const my_router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [

        {path: '/', element: <Home></Home>},
        {path: '/users', element: 'This is users'},
        
    ] },     
]);

export default my_router;