import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-32 sm:py-36 lg:py-40 overflow-hidden h-[100dvh] min-h-max flex items-center relative">
            <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-primary-600/70
backdrop-filter blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-primary-600/70
backdrop-filter blur-3xl opacity-50" />
            <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-primary-400/5 right-0
-translate-y-[40%] translate-x-[40%] top-0">
                <div className="inset-[10%] rounded-full bg-gradient-to-l from-primary-400/20">
                    <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-primary-400/30" />
                </div>
            </div>
            <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-primary-400/5 left-0
translate-y-[40%] -translate-x-[40%] bottom-0">
                <div className="inset-[10%] rounded-full bg-gradient-to-r from-primary-400/40">
                    <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-primary-400/50" />
                </div>
            </div>


            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="text-center flex flex-col items-center space-y-10">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary-600 dark:text-white font-bold">Solutions dédiées au secteur du textile</h3>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-gray-900 dark:text-white font-bold max-w-4xl capitalize">
                        Augmentez vos rendements et maîtrisez votre rentabilité
                    </h1>

                    <p className="text-base my-0  text-gray-700 dark:text-gray-300 text-center max-w-xl">
                        Visez l’excellence opérationnelle grâce à notre ERP métier conçu pour amplifier vos
                        performances et répondre précisément aux besoins de votre secteur. efficacité. Chaque mise en place
                        est accompagnée d’une augmentation minimale de 10% du CA et de 20% de la rentabilité.
                    </p>

                    <div className="flex justify-center">
                        <Link to="/demo" className="bg-[#0E5EFF] px-8 py-4 text-white text-xl w-fit p-4 rounded-3xl">Réserver une démo </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}