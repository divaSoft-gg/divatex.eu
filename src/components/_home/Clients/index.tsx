import { ILogo } from "../../../common/types"

export default function TrustedBy() {

    const logos: ILogo[] = [
        {
            id: 1,
            logo: "images/clients/client1.svg",
            name: "Alsico"
        },
        {
            id: 2,
            logo: "/images/clients/client2.svg",
            name: "Granjard"
        },
        {
            id: 3,
            logo: "/images/clients/client3.svg",
            name: "Aubade"
        },
        {
            id: 4,
            logo: "/images/clients/client4.svg",
            name: "Bleu Oceane"
        },
        {
            id: 5,
            logo: "/images/clients/client5.svg",
            name: "NAFNAF"
        },
    ]

    return (
        <section className="py-10 bg-[#181819]">
            <div className="px-5 mx-auto space-y-10 max-w-7xl sm:px-10 md:px-12 lg:px-5">
                <div className="max-w-2xl mx-auto space-y-6 text-center">
                    <h1 className="text-lg font-bold text-white capitalize lg:text-3xl dark:text-white">Tous les métiers de la fabrication à la vente</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {
                        logos.map((logo: ILogo, index: number) => (
                            <div className="p-4 rounded-lg sm:p-5 group" key={index}>
                                <img src={logo.logo} width={100} height={60} alt={logo.name} className="w-auto duration-200 ease-linear opacity-50 h-7 sm:h-10 group-hover:opacity-100 group-hover:scale-105" />
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </section>
    )
}