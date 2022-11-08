import { RouterProvider } from 'react-router-dom';
import './App.css';
import my_router from './routes/Routes';

function App() {
    return (
        <div className="App">
            <RouterProvider router={my_router}></RouterProvider>
        </div>
    );
}

export default App;
