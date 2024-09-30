import { Helmet } from 'react-helmet-async'
import CenteredLayout from '../../ui/centredLayout'
import { DIVATEX_MODULES } from '../../../common/data'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { IFunctionality } from '../../../common/types';
import { BsCheckAll } from "react-icons/bs";


export default function Stats() {

    const Functionalities: IFunctionality[] = DIVATEX_MODULES;

    return (
        <>
            <Helmet>
                <title>A propos</title>
            </Helmet>

            <CenteredLayout>
                <h1 className="text-7xl text-[#191919] w-full font-thin leading-normal">L'essence de notre ERP textile</h1>

                <div className="flex flex-row w-full dark:bg-gray-900 justify-evenly md:flex-col md:gap-10 md:items-center md:p-10 md:rounded-lg lg:flex-row sm:flex-col sm:gap-10 sm:p-10">
                    <img src="/images/a-propos-3.png" alt="image" className="object-cover w-full h-auto md:w-1/2 sm:w-full" />
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 capitalize dark:text-white">Innovation, rapidité & excellence</h1>
                        <small>DivaTex vous accompagne depuis plus de 15 ans</small>
                        <p>
                            Résultat d'une expertise approfondie dans le domaine de la gestion de production pour le secteur textile, DivaTex se distingue comme une solution orientée vers l'atteinte de vos objectifs.
                            L'évolution constante de notre solution depuis sa création illustre notre engagement à répondre aux besoins évolutifs de nos clients, en fournissant une platforme à la fois robuste, flexible et facile à intégrer.
                        </p>

                        <div className="flex flex-row gap-4 p-6 mt-8 text-center bg-gray-100 rounded-lg justify-evenly dark:bg-gray-900">
                            <div>
                                <h2 className="text-xl font-medium text-gray-900 sm:text-2xl lg:text-3xl dark:text-white">140+</h2>
                                <strong className='text-2xl uppercase'>Clients</strong>
                                <p className="text-gray-700 dark:text-gray-300">Tous dans le milieu du textile, de sa fabrication à sa vente</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-medium text-gray-900 sm:text-2xl lg:text-3xl dark:text-white">190+</h2>
                                <strong className='text-2xl uppercase'>usines</strong>
                                <p className="text-gray-700 dark:text-gray-300">une présence en europe et dans le nord de l'Afrique</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full dark:bg-gray-900 justify-evenly md:flex-col md:gap-10 md:items-center md:p-10 md:rounded-lg lg:flex-row sm:flex-col sm:gap-10 sm:p-10">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 capitalize dark:text-white">Une vue à <strong>360°</strong> pour une solution complàte</h1>
                        <p>
                            DivaTex offre une perspective intégrale à activité textile, englobant toutes les étapes clés, de la recherche à l'assistance, pour garantir l'excellence à chaque niveau de votre entreprise.
                        </p>

                        <div className="grid gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                            <div className="p-5 space-y-4 bg-gray-100 rounded-lg md:p-6 dark:bg-gray-900">
                                <div className="flex items-center gap-4 text-gray-900 dark:text-white">

                                    <h2 className="text-2xl font-bold">Recherche</h2>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    innovations de pointe et utilisation de l'IA pour anticiper les besoins de demain et maintenir votre entreprise à la pointe du secteur.
                                </p>
                            </div>
                            <div className="p-5 space-y-4 bg-gray-100 rounded-lg md:p-6 dark:bg-gray-900">
                                <div className="flex items-center gap-4 text-gray-900 dark:text-white">

                                    <h2 className="text-2xl font-bold">Développement</h2>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Méthode agile et sure-musure pour intégrer rapidement les fonctionalités les plus avancées avec performance et adaptabilité.
                                </p>
                            </div>
                            <div className="p-5 space-y-4 bg-gray-100 rounded-lg md:p-6 dark:bg-gray-900">
                                <div className="flex items-center gap-4 text-gray-900 dark:text-white">

                                    <h2 className="text-2xl font-bold">Commercial</h2>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Approche orientée solution pour identifier et répondre précisément à vos besoins, assurant l'adéquation parfaite entre nos offres et vos exigences.
                                </p>
                            </div>
                            <div className="p-5 space-y-4 bg-gray-100 rounded-lg md:p-6 dark:bg-gray-900">
                                <div className="flex items-center gap-4 text-gray-900 dark:text-white">

                                    <h2 className="text-2xl font-bold">Support</h2>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Assistance complète et réactive pour résoudre rapidement toutes problématique, garantissant la continuité de vos opérations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src="/images/a-propos-4.png" alt="image" className="object-cover w-full h-auto md:w-1/2 sm:w-full" />
                </div>


                <div className='w-full p-10 my-12 lg:p-0'>
                    <h1 className="text-3xl font-semibold text-gray-900 capitalize dark:text-white">Les piliers de notre solution ERP qui dynamisent chaque facette de votre activité.</h1>
                    <p className="text-2xl text-gray-700 dark:text-gray-300">Transformer votre entreprise textile avec DivaTex</p>

                    <div className='grid w-full grid-cols-3 gap-4 p-10 mt-8 lg:grid-cols-3 sm:grid-cols-2 lg:p-0'>
                        {
                            Functionalities.map((item, index) => {
                                return (
                                    <Card shadow="sm" key={index} isPressable>
                                        <CardBody className="p-0 overflow-visible">
                                            <Image
                                                shadow="sm"
                                                radius="lg"
                                                width="100%"
                                                alt={item.title}
                                                className="object-cover w-full"
                                                src={`/images/${item.image}`}
                                            />
                                        </CardBody>
                                        <CardFooter className="flex flex-col items-start gap-2">
                                            <strong className='my-3 text-xl uppercase'>{item.title}</strong>
                                            <ul className='text-left'>
                                                {
                                                    item.functionalities?.map((subFeature, index) => {
                                                        return <li key={index} className='flex items-center gap-2'>
                                                            <BsCheckAll />
                                                            {subFeature}
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </CardFooter>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </CenteredLayout>
        </>
    )
}