import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../features/home";




export const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    { 
        path: '*',
        element: '404 Not found'
    }
])
