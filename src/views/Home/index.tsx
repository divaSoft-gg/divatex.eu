import TrustedBy from "../../components/_home/Clients";
import HeroSection from "../../components/HeroSection";
import Leading from "../../components/_home/Leading";
import IFeature, { IHeroConfig } from "../../common/types";
import { LEADING_ARRAY } from "../../common/data";
import { Helmet } from "react-helmet-async";
import Stats from "../../components/_home/Stats";
import { Button, Link } from "@nextui-org/react";
import { scrollToTop } from "../../common/utils";

export default function Home() {

    const leadingFeatureArray: IFeature[] = LEADING_ARRAY;
    const heroSectionParams: IHeroConfig = {
        coverPath: "/images/header_background.webp",
        maxHeight: '900px',

        renderContent: () => {
            return (
                <>
                    <p className="text-2xl font-medium text-[#0E5EFF]">Solutions dédiées au secteur du textile</p>
                    <p className="font-light text-7xl leading-snug max-w-[900px] mt-4 mb-8">
                        Augmentez vos rendements et maîtrisez votre rentabilité
                    </p>

                    <div className="flex flex-col items-center gap-4 my-16 text-sm font-normal">
                        <p className="leading-3">Visez l’excellence opérationnelle grâce à notre ERP métier conçu pour amplifier vos</p>
                        <p className="leading-3">performances et répondre précisément aux besoins de votre secteur. efficacité. Chaque mise en place </p>
                        <p className="leading-3">est accompagnée d’une augmentation minimale de 10% du CA et de 20% de la rentabilité.</p>
                    </div>

                    <div className="flex flex-row justify-center gap-8 actionButtons">
                        <Button className="text-white border-[#0E5EFF]" size="lg" variant="bordered">En savoir plus</Button>
                        <Button href="/demo" onClick={() => { scrollToTop() }} as={Link} color="primary" className="text-white border-[#0E5EFF]" size="lg" variant="solid">Réserver une démo</Button>
                    </div>
                </>
            )


        }
    }

    return (

        <>
            <Helmet>
                <title>Accueil</title>
            </Helmet>
            <HeroSection data={heroSectionParams} />
            <TrustedBy />
            <Leading featureArray={leadingFeatureArray} />
            <Stats />
        </>
    )
}