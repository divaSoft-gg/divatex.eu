import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ui/ErrorFallback";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import LoadingFallback from "./components/ui/LoadingFallback";
import { router } from "./router";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <Helmet titleTemplate="Diva Text | %s" />
        <RouterProvider router={router} fallbackElement={<LoadingFallback />} />
      </HelmetProvider>
    </ErrorBoundary>
  );
}
