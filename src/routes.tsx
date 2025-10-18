import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UseStateDemo from "./hooks/useStateDemo/useStateDemo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/UseState",
        element: <UseStateDemo />
    }
])

export default router;