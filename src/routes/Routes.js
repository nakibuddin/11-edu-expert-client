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


export const my_router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        
        {path: '/', element: <Home></Home>},     

        {path: '/home', element: <Home></Home>},     

        {
            path: '/services',
            loader: async () => fetch('http://localhost:5000/services'),
            element: <Services></Services>
        }, 

        {path: '/add-service', element: <PrivateRoutes><AddService></AddService></PrivateRoutes>},

        {
            path: '/service/:id',
            loader: async ({params}) => fetch(`http://localhost:5000/service/${params.id}`),
            element: <ServiceDetails></ServiceDetails>
        },
        
        {
            path:'/my-reviews',
            // loader: async () => fetch(`http://localhost:5000/my-reviews/${user?.email}`),
            element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
        } ,

        {path: '/blog', element: <Blog></Blog>},        

        {path: '/register', element: <Register></Register>}, 

        {path: '/login', element: <Login></Login>},         

        {path: '*', element: <PageNotFound></PageNotFound>},

    ]}
])
