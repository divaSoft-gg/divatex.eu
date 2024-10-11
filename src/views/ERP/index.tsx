import { Helmet } from "react-helmet-async"
import { FEATURES_ARRAY } from "../../common/data"
import { IHeroConfig } from "../../common/types"
import Leading from "../../components/_home/Leading"
import HeroSection from "../../components/HeroSection"

export default function ERP() {

    const heroSectionParams: IHeroConfig = {
        coverPath: "/images/header_background.webp",
        maxHeight: '900px',

        renderContent: () => {
            return (
                <>
                    <p className="text-2xl font-medium">Votre atout stratégique</p>
                    <p className="font-light text-7xl leading-snug max-w-[700px] mt-4 mb-8"><strong className="font-bold">DivaTex</strong> au coeur de votre perfomance</p>

                    <div className="flex flex-col items-center gap-4 text-sm font-normal">
                        <p>Maximisez l’efficacité et la rentabilité avec une solution ERP qui redéfinit la gestion textile.</p>
                        <p>Découvrez ci-dessous les différents modules qui composent notre outil global.</p>
                    </div>
                </>
            )


        }
    }


    const erpLeadingArray = FEATURES_ARRAY

    return (
        <>
            <Helmet>
                <title>Notre ERP</title>
            </Helmet>
            <HeroSection data={heroSectionParams} />
            <Leading featureArray={erpLeadingArray} />
        </>
    )
}