
export default function About() {
    return (
        <div className="flex flex-col gap-8 py-12">

            <div className="flex flex-col gap-16 px-5 py-10 mx-auto bg-gray-100 max-w-7xl sm:px-10 md:px-12 lg:px-10 md:flex-row rounded-2xl dark:bg-gray-900">
                <div className="flex md:flex-1">
                    <img src="/images/a-propos-1.png" alt="working on housing" width={1300} className="object-cover w-full rounded-lg md:h-full" />
                </div>
                <div className="space-y-12 text-gray-700 md:w-1/2 dark:text-gray-300">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">A propos de nous</h1>
                    <div>
                        <strong className="block mb-2">Un cheminement vers l’innovation et l’excellence</strong>
                        <p>
                            Fondée en 2009 en Tunisie, notre société s’est rapidement imposée comme un acteur clé dans le secteur de l’ERP dédié à l’industrie textile. Avec un engagement indéfectible envers l’innovation, l’excellence et la rapidité, nous avons connu une croissance soutenue, attirant de nouveaux clients et élargissant constamment notre portée.
                        </p>
                    </div>

                    <div>
                        <strong className="block mb-2">Expansion sur la scène internationale</strong>
                        <p>
                            En 2014, nous avons franchi un cap majeur en nous introduisant sur le marché international, en collaborant avec des marques renommées telles que Fil Rouge, Alsico et Bleu Océane. Cette avancée a marqué notre ascension en tant que leader dans le domaine de l’ERP textile, affirmant notre capacité à répondre aux exigences de la production à grande échelle.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-16 px-5 py-10 mx-auto bg-gray-100 max-w-7xl sm:px-10 md:px-12 lg:px-10 md:flex-row rounded-2xl dark:bg-gray-900">
                <div className="space-y-12 text-gray-700 md:w-1/2 dark:text-gray-300">
                    <div>
                        <strong className="block mb-2">Partenariats stratégiques et diversification</strong>
                        <p>
                            L’année 2018 a été un tournant décisif, symbolisant notre capacité à intégrer des marques prestigieuses comme Aubade pour leurs besoins en production et Naf Naf pour une gestion intégrale du cycle de l’entreprise. Ces partenariats ont consolidé notre réputation et démontré la polyvalence de notre ERP.
                        </p>
                    </div>

                    <div>
                        <strong className="block mb-2">Accélération à grande échelle</strong>
                        <p>
                            Faisant suite à l’intérêt croissant de clients français et belges pour les solutions de Diva Software et pour poursuivre nos ambitions de développement en Europe, nous avons réalisé en 2023 une « joint venture » avec une société luxembourgeoise. Cette dernière est active dans la transformation digitale des entreprises et plus spécifiquement dans le développement de solutions eCommerce et SaaS.
                        </p>
                        <p>
                            Afin de renforcer notre assise et de garantir notre fiabilité, DivaTex est maintenant soutenue par un fond privé belge.
                        </p>
                        <p>
                            Cette fusion a été le catalyseur d’une croissance amplifiée, nous permettant de déployer notre solution ERP à travers l’Europe et l’Afrique du Nord et d’insuffler une dynamique nouvelle à la gestion textile.
                        </p>
                    </div>
                    <div>
                        <strong className="block mb-2">Innover pour l’avenir</strong>
                        <p>
                            Aujourd’hui, plus que jamais, nous sommes animés par la vision de révolutionner l’industrie textile grâce à des solutions ERP sur mesure, favorisant la croissance, l’efficience et le succès durable de nos clients.
                        </p>
                    </div>
                </div>

                <div className="flex md:flex-1">
                    <img src="/images/a-propos-2.png" alt="working on housing" width={1300} className="object-cover w-full rounded-lg md:h-full" />
                </div>
            </div>

        </div>
    )
}