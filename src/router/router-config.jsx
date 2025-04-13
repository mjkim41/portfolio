import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/RootLayout.jsx";
import MainPage from "../pages/MainPage.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <MainPage />,
            }
        ]
    }
])