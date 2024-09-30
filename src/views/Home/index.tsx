import TrustedBy from "../../components/_home/Clients";
import HeroSection from "../../components/HeroSection";
import Leading from "../../components/_home/Leading";
import IFeature, { IHeroConfig } from "../../common/types";
import { LEADING_ARRAY } from "../../common/data";
import { Helmet } from "react-helmet-async";

export default function Home() {

    const heroSectionConfiguration: IHeroConfig = {
        slug: "Solutions dédiées au secteur du textile",
        title: "Augmentez vos rendements et maîtrisez votre rentabilité",
        description: "Visez l’excellence opérationnelle grâce à notre ERP métier conçu pour amplifier vos performances et répondre précisément aux besoins de votre secteur. efficacité. Chaque mise en place est accompagnée d’une augmentation minimale de 10% du CA et de 20% de la rentabilité.",
        button: {
            text: "Réserver une démo",
            link: "/demo"
        }
    }

    const leadingFeatureArray: IFeature[] = LEADING_ARRAY;

    return (

        <>
            <Helmet>
                <title>Accueil</title>
            </Helmet>
            <HeroSection config={heroSectionConfiguration} />
            <TrustedBy />
            <Leading featureArray={leadingFeatureArray} />
        </>
    )
}