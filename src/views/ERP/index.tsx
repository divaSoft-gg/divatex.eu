import { Helmet } from "react-helmet-async"
import { FEATURES_ARRAY } from "../../common/data"
import { IHeroConfig } from "../../common/types"
import Leading from "../../components/_home/Leading"
import HeroSection from "../../components/HeroSection"

export default function ERP() {

    const heroSectionConfiguration: IHeroConfig = {
        slug: "Votre atout stratégique",
        title: "DivaTex au coeur de votre perfomance",
        description: "Maximisez l’efficacité et la rentabilité avec une solution ERP qui redéfinit la gestion textile. Découvrez ci-dessous les différents modules qui composent notre outil global.",
        button: {
            text: '',
            link: ''
        }
    }

    const erpLeadingArray = FEATURES_ARRAY

    return (
        <>
            <Helmet>
                <title>Notre ERP</title>
            </Helmet>
            <HeroSection config={heroSectionConfiguration} />
            <Leading featureArray={erpLeadingArray} />
        </>
    )
}