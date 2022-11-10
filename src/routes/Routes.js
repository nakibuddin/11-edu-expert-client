import { createBrowserRouter } from 'react-router-dom';

import Main from './../layout/Main/Main';
import Blog from './../components/Blog/Blog';
import PageNotFound from './../components/PageNotFound/PageNotFound';
import Home from './../components/Home/Home';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import Services from '../components/services/Services/Services';
import ServiceDetails from '../components/services/ServiceDetails/ServiceDetails';


export const my_router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        
        {path: '/', element: <Home></Home>},     

        {path: '/home', element: <Home></Home>},     

        {
            path: '/services',
            loader: async () => fetch('http://localhost:5000/services'),
            element: <Services></Services>
        }, 

        {
            path: '/service/:id',
            loader: async ({params}) => fetch(`http://localhost:5000/service/${params.id}`),
            element: <ServiceDetails></ServiceDetails>
        }, 

        {path: '/register', element: <Register></Register>}, 

        {path: '/login', element: <Login></Login>}, 

        {path: '/blog', element: <Blog></Blog>},        

        {path: '*', element: <PageNotFound></PageNotFound>},

    ]}
])
