import { createBrowserRouter } from 'react-router-dom';

import Main from './../layout/Main/Main';
import Blog from './../components/Blog/Blog';
import PageNotFound from './../components/PageNotFound/PageNotFound';
import Home from './../components/Home/Home';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import Services from '../components/services/Services/Services';
import ServiceDetails from '../components/services/ServiceDetails/ServiceDetails';
import AddService from '../components/AddService/AddService';
import MyReviews from '../components/MyReviews/MyReviews';
import PrivateRoutes from './PrivateRoutes';

// const loadServices = loader: async () => fetch('https://11-edu-expert-server.vercel.app/services'),

export const my_router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        
        {path: '/',
        loader: async () => fetch('https://11-edu-expert-server.vercel.app/services/limit'),
        element: <Home></Home>},     

        {path: '/home',
        loader: async () => fetch('https://11-edu-expert-server.vercel.app/services/limit'),
        element: <Home></Home>},     

        {
            path: '/services',
            loader: async () => fetch('https://11-edu-expert-server.vercel.app/services'),
            element: <Services></Services>
        }, 

        {path: '/add-service', element: <PrivateRoutes><AddService></AddService></PrivateRoutes>},

        {
            path: '/service/:id',
            loader: async ({params}) => fetch(`https://11-edu-expert-server.vercel.app/service/${params.id}`),
            element: <ServiceDetails></ServiceDetails>
        },
        
        {
            path:'/my-reviews',
            // loader: async () => fetch(`https://11-edu-expert-server.vercel.app/my-reviews/${user?.email}`),
            element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
        } ,

        {path: '/blog', element: <Blog></Blog>},        

        {path: '/register', element: <Register></Register>}, 

        {path: '/login', element: <Login></Login>},         

        {path: '*', element: <PageNotFound></PageNotFound>},

    ]}
])
