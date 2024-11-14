import { createBrowserRouter, RouteObject } from "react-router-dom";
import { AppContainer } from "./components/ui/AppContainer";
import { ErrorFallback } from "./components/ui/ErrorFallback";
import Home from "./views/Home";
import ERPView from "./views/ERP";

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
];

export const router = createBrowserRouter([...publicRoutes]);
