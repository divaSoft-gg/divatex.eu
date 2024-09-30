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
        <section className="py-20 bg-[#181819]">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
                <div className="text-center space-y-6 max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-whirte dark:text-white capitalize">Tous les métiers de la fabrication à la vente</h1>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    {
                        logos.map((logo: ILogo, index: number) => (
                            <div className="p-4 sm:p-5 rounded-lg group" key={index}>
                                <img src={logo.logo} width={100} height={60} alt={logo.name} className="h-7 sm:h-10 w-auto ease-linear duration-200 opacity-50 group-hover:opacity-100 group-hover:scale-105" />
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </section>
    )
}