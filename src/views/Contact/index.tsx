// import { Button, Divider, Input, Snippet, Textarea } from "@nextui-org/react";
import { Helmet } from "react-helmet-async";
import CenteredLayout from "../../components/ui/centredLayout";
import { CONTACT_ARRAY } from "../../common/data";
import { IContactInfo } from "../../common/types";
import ContactCard from "../../components/_contact";
import { Button, Input, Textarea } from "@nextui-org/react";

export default function Contact() {

    const contactArray: IContactInfo[] = CONTACT_ARRAY;

    return (
        <div className="mt-16">
            <Helmet>
                <title>Contactez-nous</title>
            </Helmet>

            <CenteredLayout>
                <div className="max-w-2xl p-4 space-y-4 lg:p-0">
                    <span
                        className="relative pl-6 font-semibold text-blue-600 dark:text-blue-400 before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full">
                        DIVATEX – Logiciel métier pour le textile
                    </span>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Besoin d’informations sur notre ERP ?</h1>
                </div>

                <section className="py-4 lg:py-24">
                    <div className="mx-auto lg:px-5 sm:px-10 md:px-12">
                        <div className="relative w-full px-6 py-8 md:py-10 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900">
                            <div className="absolute top-0 right-0 flex justify-end w-full h-full">
                                <div className="relative flex overflow-hidden w-28 h-28 rounded-xl blur-2xl">
                                    <span className="absolute w-16 h-16 rotate-45 bg-blue-500 rounded-md -top-1 -right-1" />
                                    <span className="absolute w-16 h-16 rotate-45 bg-teal-500 rounded-md -bottom-1 -right-1" />
                                    <span className="absolute w-16 h-16 rotate-45 bg-indigo-300 rounded-md -bottom-1 -left-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 flex items-end w-full h-full">
                                <div className="relative flex overflow-hidden w-28 h-28 rounded-xl blur-2xl">
                                    <span className="absolute w-16 h-16 rotate-45 bg-blue-500 rounded-md -top-1 -right-1" />
                                    <span className="absolute w-16 h-16 rotate-45 bg-teal-500 rounded-md -bottom-1 -right-1" />
                                    <span className="absolute w-16 h-16 rotate-45 bg-indigo-300 rounded-md -bottom-1 -left-1" />
                                </div>
                            </div>
                            <div className="relative w-full space-y-8">
                                <h1 className="lg:text-7xl text-4xl  text-[#191919] w-full font-thin leading-normal">Nos bureaux en <strong className="font-bold">Europe</strong> et en <strong className="font-bold">Afrique du Nord</strong></h1>

                                <div className="grid w-full gap-4 my-8 contactGrid">
                                    {
                                        contactArray.map((contact, index) => <ContactCard {...contact} key={index} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <form
                    name="maak-clients-submissions"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    className="my-12"
                >
                    <input type="hidden" name="form-name" value="maak-clients-submissions" />
                    <div className="flex flex-col w-full gap-4 p-4 lg:grid lg:grid-cols-2 lg:p-0">
                        <Input
                            type="text"
                            label="Nom & Prénom"
                            placeholder="Jhon Doe"
                            name="client-name"
                            required
                        />
                        <Input
                            type="email"
                            label="Email"
                            placeholder="5RJpJ@example.com"
                            name="client-email"
                            required
                        />

                        <Input
                            type="text"
                            label="Enterprise"
                            placeholder="MAAK CORP"
                            name="client-company"
                            required
                        />

                        <Input
                            type="tel"
                            label="Téléphone"
                            placeholder="xxx-xxx-xxxx"
                            name="client-tel"
                            required
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        />

                        <Textarea
                            variant="faded"
                            label="Description"
                            placeholder="Votre message..."
                            className="w-full col-span-2"
                            name='client-message'
                            rows={20}
                            required
                        />
                        <Button color="primary" size="lg" className="col-span-2" type="submit">Envoyer</Button>
                    </div>
                </form >
            </CenteredLayout>

        </div >
    )
}