import { Spinner } from "@nextui-org/react";
import "./index.css";

export default function LoadingFallback() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen ">
            <Spinner
                size="md"
                label="Loading..."
            />
        </div>
    )
}