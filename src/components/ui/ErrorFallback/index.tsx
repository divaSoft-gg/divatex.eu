import { Button, Image } from "@nextui-org/react"
import CenteredLayout from "../centredLayout"

export const ErrorFallback = () => {
    return (
        <CenteredLayout>
            <div className="flex flex-row items-center justify-center h-screen gap-8">
                <Image src="images/error_page_face.png" alt="Error" width={200} />
                <div>
                    <h2 className="text-lg font-semibold">Oopsy daisy, It looks like something went wrong</h2>
                    <Button
                        color="default"
                        size="lg"
                        className="w-full mt-12"
                        onClick={() => window.location.assign(window.location.origin)}
                    >
                        Refresh
                    </Button>
                </div>
            </div>
        </CenteredLayout>
    )
}
