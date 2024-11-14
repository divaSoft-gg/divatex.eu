import { createBrowserRouter, RouteObject } from "react-router-dom";
import { AppContainer } from "./components/ui/AppContainer";
import { ErrorFallback } from "./components/ui/ErrorFallback";
import Home from "./views/Home";
import ERPView from "./views/ERP";
import ContactUsView from "./views/contactUs";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <ErrorFallback />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/erp",
    element: <AppContainer />,
    errorElement: <ErrorFallback />,
    children: [{ index: true, element: <ERPView /> }],
  },
  {
    path: "/contact-us",
    element: <AppContainer />,
    errorElement: <ErrorFallback />,
    children: [{ index: true, element: <ContactUsView /> }],
  },
];

export const router = createBrowserRouter([...publicRoutes]);
