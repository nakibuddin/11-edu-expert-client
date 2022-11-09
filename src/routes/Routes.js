import { createBrowserRouter } from 'react-router-dom';

import Main from './../layout/Main/Main';
import Blog from './../components/Blog/Blog';
import PageNotFound from './../components/PageNotFound/PageNotFound';
import Home from './../components/Home/Home';


export const my_router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},     
        {path: '/home', element: <Home></Home>},     

        {path: '/blog', element: <Blog></Blog>},

        {path: '*', element: <PageNotFound></PageNotFound>},

    ]}
])
