import { CONTACT_ARRAY } from "../../common/data";
import { IContactInfo } from "../../common/types";
import HeroSection from "../../components/HeroSection";
import { useMediaQuery } from "react-responsive";

export default function Contact() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const heroSectionParams = {
        coverPath: "/images/it-services-4-asx-cuw3-2.jpg",
        maxHeight: isMobile ? '300px' : '500px',
        renderContent: () => {
            return (

                < >
                    <h3 className="text-2xl">DIVATEX – Logiciel métier pour le textile</h3>
                    <h1 className="mx-auto lg:text-7xl text-3xl lg:w-[850px] mt-8">Besoin d’informations sur notre ERP ?</h1>
                    <p className="mt-12 text-sm lg:w-[650px] mx-auto">
                        Pour des solutions personnalisées ou pour plus d’informations sur notre ERP, notre équipe d’experts est à votre écoute. Entamons ensemble le dialogue de votre transformation numérique.
                    </p>
                </>

            )


        }
    }

    const contactArray: IContactInfo[] = CONTACT_ARRAY;

    return (
        <div className="w-full bg-gray-100 ">
            {/* <div className="relative w-full bg-center bg-no-repeat bg-fill"> */}

            <HeroSection data={heroSectionParams} />
            {/* </div> */}


            <div className="max-w-[var(--max-content-width)] px-5 mx-auto py-16">
                <form className="max-w-[800px] mx-auto">
                    <div className="grid gap-6 mb-4 md:grid-cols-2">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Prénom</label>
                            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
                        </div>
                        <div>
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Entreprise</label>
                            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Diva-Software" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Téléphone</label>
                            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                    </div>

                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />

                    <label htmlFor="message" className="block mt-2 mb-2 text-sm font-medium text-gray-900">Message</label>
                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Votre message..."></textarea>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-8">Submit</button>
                </form>
            </div>

            <div className="max-w-[var(--max-content-width)] mx-auto pb-12 text-center">

                <p className="text-2xl text--[#191919]">Où nous trouver</p>
                <h1 className="lg:text-7xl text-5xl text-[#191919] mt-8 lg:w-[850px] mx-auto font-thin leading-normal">Nos bureaux en <strong className="font-bold">Europe</strong> et en <strong className="font-bold">Afrique du Nord</strong></h1>

                <div className="flex flex-row flex-wrap items-center justify-center gap-12 mt-12">
                    {
                        contactArray.map((contact, index) => {
                            return (
                                <div className="text-[#191919] shadow-sm p-8 w-[400px] flex flex-col gap-4" key={index}>
                                    <p className="text-2xl font-bold">{contact.location}</p>
                                    <p className="text-xs">{contact.addresse}</p>
                                    <a href={`mailto:${contact.email}`} className="text-[#0E5EFF] w-fit mx-auto">{contact.email}</a>
                                    <a href={`tel:${contact.phone}`} className="w-fit mx-auto text-[#0E5EFF] rounded-xl py-2 px-4 border border-[#0E5EFF] hover:bg-[#0E5EFF] hover:text-white transition-all duration-300">{contact.phone}</a>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )

}