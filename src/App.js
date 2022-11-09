import './App.css';
import { RouterProvider } from 'react-router-dom';
import { my_router } from './routes/Routes';
import { ToastContainer } from 'react-toastify';


function App() {
    return (
        <div>
            <RouterProvider router={my_router}></RouterProvider>
            <ToastContainer/>
        </div>
    );
}

export default App;
