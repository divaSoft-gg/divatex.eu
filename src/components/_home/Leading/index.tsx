import IFeature from "../../../common/types";

import FeatureCard from "../../FeatureCard";
import CenteredLayout from "../../ui/centredLayout";

export default function Leading({ featureArray }: { featureArray: IFeature[] }) {

    return (
        <div className="w-full py-16 text-black bg-[#F2F2F2]" id="DivaTexHero">
            <CenteredLayout  >
                <h1 className="text-5xl text-center">Votre <strong>partenaire technologique</strong> innovant</h1>
                <p className="text-xl text-center text-[#191919] max-w-[800px] mx-auto mt-8 p-4 lg:p-0">
                    Découvrez comment DivaTex propulse vos opérations à un niveau supérieur avec des solutions taillées sur mesure pour le secteur textile.
                </p>

                <div className="p-4 my-16 featuresGrid lg:p-0">
                    {
                        featureArray.map((feature: IFeature, index: number) => <FeatureCard key={index} feature={feature} />
                        )
                    }
                </div>
            </CenteredLayout >
        </div >
    )
}