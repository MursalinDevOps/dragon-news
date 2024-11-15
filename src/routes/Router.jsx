import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from "../layouts/Home"
import CategoryNews from "../pages/CategoryNews"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: '',
                element: <Navigate to="/category/01"></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <div>News Layout</div>
    },
    {
        path: '/auth',
        element: <div>Login</div>
    },
    {
        path: '*',
        element: <div className="text-red-600 flex justify-center items-center min-h-screen text-5xl">404 ERROR!</div>
    }
])
export default router