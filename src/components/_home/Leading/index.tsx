import { LEADING_ARRAY } from "../../../common/data";
import IFeature from "../../../common/types";

import FeatureCard from "../../FeatureCard";
import CenteredLayout from "../../ui/centredLayout";

export default function Leading() {

    const features: IFeature[] = LEADING_ARRAY;

    return (
        <div className="w-full py-16 bg-white text-black" id="DivaTexHero">
            <CenteredLayout>
                <h1 className="text-5xl text-center">Votre <strong>partenaire technologique</strong> innovant</h1>
                <p className="text-xl text-center text-[#191919] max-w-[800px] mx-auto mt-8">
                    Découvrez comment DivaTex propulse vos opérations à un niveau supérieur avec des solutions taillées sur mesure pour le secteur textile.
                </p>

                <div className="featuresGrid my-16">
                    {
                        features.map((feature: IFeature, index: number) => { return (<FeatureCard key={index} data={feature} />) })
                    }
                </div>
            </CenteredLayout>
        </div>
    )
}