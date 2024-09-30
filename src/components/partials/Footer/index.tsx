import { Button, Link } from "@nextui-org/react";

export default function Footer() {
    return (
        <footer className="pt-2">
            <div className="px-2 sm:px-0">
                <div className="mx-auto w-full max-w-6xl bg-gray-900 dark:bg-blue-950 p-5 sm:p-10 py-10 sm:py-14 md:py-16 rounded-3xl relative overflow-hidden">
                    <div className="relative flex flex-col items-center text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white font-bold max-w-4xl">Solutions dédiées au secteur du textile</h1>
                        <p className="text-base text-gray-300 max-w-xl mt-10">La solution métier qui répond aux besoins de l’industrie textile</p>
                        <div className="flex justify-center mt-10">
                            <Button
                                href="/demo"
                                as={Link}
                                color="primary"
                                showAnchorIcon
                                variant="solid"
                                size="lg"
                            >
                                Réserver une démo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-900 pt-60 -mt-48 px-4 sm:px-10 md:px-12 lg:px-8">
                <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-y-5 py-3 border-t border-t-gray-300 dark:border-t-gray-700">
                    <p className="text-gray-700 dark:text-gray-300">
                        ©  {new Date().getFullYear()} DIVATEX. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}