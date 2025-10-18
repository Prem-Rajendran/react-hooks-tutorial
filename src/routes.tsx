import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UseStateDemo from "./hooks/useStateDemo/useStateDemo";
import UseEffectDemo from "./hooks/useEffectDemo/useEffectDemo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/UseState",
        element: <UseStateDemo />
    },
    {
        path: "/UseEffect",
        element: <UseEffectDemo />
    }
])

export default router;