import { Button, Divider, Input, Snippet, Textarea } from "@nextui-org/react";
import { Helmet } from "react-helmet-async";
import { FaLinkedinIn } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import CenteredLayout from "../../components/ui/centredLayout";

export default function Contact() {
    return (
        <div className="mt-16">
            <Helmet>
                <title>Get in touch</title>
            </Helmet>

            <CenteredLayout>
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
            </CenteredLayout>
        </div>
    )
}