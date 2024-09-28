import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import LoadingFallback from "./components/ui/Loader"
import { ErrorBoundary } from "react-error-boundary"
import { ErrorFallback } from "./components/ui/ErrorFallback"
import { Helmet, HelmetProvider } from "react-helmet-async"


function App() {

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Helmet
            titleTemplate="MAAK CORP | %s"
            defaultTitle=""
          />
          <RouterProvider
            router={router}
            fallbackElement={<LoadingFallback />}
          />
        </HelmetProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
