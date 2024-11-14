import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NextUIProvider, Spinner } from "@nextui-org/react";
import { cn } from "../../../common/utils";
import Navbar from "../../partials/navbar";

export function AppContainer({ className = "" }) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <NextUIProvider navigate={navigate}>
      <div className={cn("w-full h-full", className)}>
        {location.pathname !== "/" && <Navbar />}

        <React.Suspense
          fallback={
            <div className="flex items-center justify-center w-full h-full">
              <Spinner />
            </div>
          }
        >
          <Outlet />
        </React.Suspense>
      </div>
    </NextUIProvider>
  );
}
