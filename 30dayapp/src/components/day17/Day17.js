import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root from "./Root";
import Dashboard from "./Dashboard";
import MissingPage from "./MissingPage";
import Settings from "./Settings";
import About from "./About";
import Root2 from "./Root2";

/* 
Demo for creating Routing and Navigation
*/

const Day17 = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: "dashboard",
                    element: <Dashboard />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "settings",
                    element: <Settings />,
                },
                {
                    path: "*",
                    element: <MissingPage />,
                }
            ]
        },
        {
            path: '/app',
            element: <Root2 />,
            children: []
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};
export default Day17;