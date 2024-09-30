// import { Button, Divider, Input, Snippet, Textarea } from "@nextui-org/react";
import { Helmet } from "react-helmet-async";
import CenteredLayout from "../../components/ui/centredLayout";
import { CONTACT_ARRAY } from "../../common/data";
import { IContactInfo } from "../../common/types";
import ContactCard from "../../components/_contact";

export default function Contact() {

    const contactArray: IContactInfo[] = CONTACT_ARRAY;

    return (
        <div className="mt-16">
            <Helmet>
                <title>Contactez-nous</title>
            </Helmet>

            <CenteredLayout>
                <div className="max-w-2xl space-y-4">
                    <span
                        className="relative pl-6 font-semibold text-blue-600 dark:text-blue-400 before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full">
                        DIVATEX – Logiciel métier pour le textile
                    </span>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Besoin d’informations sur notre ERP ?</h1>
                </div>

                <section className="py-24">
                    <div className="px-5 mx-auto max-w-7xl sm:px-10 md:px-12 lg:px-5">
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
                                <h1 className="text-7xl text-[#191919] w-full font-thin leading-normal">Nos bureaux en <strong className="font-bold">Europe</strong> et en <strong className="font-bold">Afrique du Nord</strong></h1>

                                <div className="grid w-full gap-4 my-8 contactGrid">
                                    {
                                        contactArray.map((contact, index) => <ContactCard {...contact} key={index} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </CenteredLayout>

















            {/* <CenteredLayout>
                <div className="flex flex-col items-center gap-4">
                    <h1>
                        E-mail us @
                        <Snippet variant="bordered" symbol="">contact@maak-corp.tn</Snippet>
                    </h1>

                    <div className="flex flex-row justify-center gap-2">
                        <Button isIconOnly color="default" variant="ghost" aria-label="LinkedIn" href="https://www.linkedin.com/company/maak-corp">
                            <FaLinkedinIn />
                        </Button>
                        <Button isIconOnly color="default" variant="ghost" aria-label="GitHub">
                            <VscGithubAlt />
                        </Button>
                    </div>
                </div>

                <Divider className="my-12" />

                <form
                    name="maak-clients-submissions"
                    method="POST"
                    className='lg:max-w-[500px] w-4/5 mx-auto'
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="maak-clients-submissions" />
                    <Input
                        type="text"
                        label="Name"
                        placeholder="Jhon Doe"
                        description="How should I refer to you or your business?"
                        className="w-full"
                        name="client-name"
                    />

                    <Textarea
                        variant="faded"
                        label="Description"
                        placeholder="I have a business opportunity that I would like to discuss with you..."
                        description="Tell me how I can be of help to you."
                        className="w-full my-4"
                        name='client-message'
                    />
                    <input className='w-full' type="submit" value="Submit message" />
                </form >
            </CenteredLayout> */}
        </div>
    )
}