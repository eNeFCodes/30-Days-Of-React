import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

import Root from "./Root";
import Dashboard from "./Dashboard";
import MissingPage from "./MissingPage";
import Settings from "./Settings";
import About from "./About";
import { element } from "prop-types";

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
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};
export default Day17;