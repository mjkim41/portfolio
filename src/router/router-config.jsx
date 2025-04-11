import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/RootLayout.jsx";
import IndexPage from "../pages/IndexPage.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <IndexPage />,
            }
        ]
    }
])