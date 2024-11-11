import { Button } from "@nextui-org/react";

export const ErrorFallback = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">
        Oops, It looks like something went wrong 🥸{" "}
      </h2>
      <p>Please refresh the page</p>

      <Button
        color="primary"
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};
