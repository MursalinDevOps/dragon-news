import { createBrowserRouter } from "react-router-dom"
import Home from "../layouts/Home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path:'/news',
        element:<div>News Layout</div>
    },
    {
        path:'/auth',
        element:<div>Login</div>
    },
    {
        path:'*',
        element:<div className="text-red-600 flex justify-center items-center min-h-screen text-5xl">404 ERROR!</div>
    }
])
export default router