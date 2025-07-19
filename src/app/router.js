import { createBrowserRouter } from "react-router-dom";
import RootLayout from "src/app/routes/RootLayout.jsx";
import Dashboard from "src/pages/Dashboard/index.jsx";
import ErrorLayout from "src/app/routes/ErrorLayout.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
                path: true,
                element: <Dashboard />,
            },
            {
                path: "/login",
            },
        ],
    },
]);
