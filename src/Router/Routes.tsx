import {createBrowserRouter} from "react-router-dom";
import Layout from "../Pages/Layout";
import HomePage from "../Pages/HomePage";
import GameDetailPage from "../Pages/GameDetailPage";
import ErrorPage from "../Pages/ErrorPage";

const route = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "game/:slug",
                element: <GameDetailPage />,
            },
        ],
    },
]);

export default route;
