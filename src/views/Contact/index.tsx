import { CONTACT_ARRAY } from "../../common/data";
import { ContactForm, IContactInfo } from "../../common/types";
import HeroSection from "../../components/HeroSection";
import { useMediaQuery } from "react-responsive";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "@nextui-org/react";
import { sendEmail } from "../../services/sendGrid";
import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

const schema = yup
  .object({
    firstName: yup.string().required("Le nom est un champ requis."),
    lastName: yup.string().required("Le prénom est un champ requis."),
    company: yup.string().required("L'entreprise est un champ requis."),
    phone: yup.string().required("Le téléphone est un champ requis."),
    email: yup
      .string()
      .email("L'email doit être au format valide.")
      .required("L'email est un champ requis."),
    message: yup.string().required("Le message est un champ requis."),
  })
  .required();

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (values: ContactForm) => {
    setIsSubmitting(true);
    setStatus("idle"); // Reset status before starting a new submission
    try {
      const response = await sendEmail(values);
      if (response) {
        await sendEmail(
          values,
          values.email,
          "Your Email Is Sent Successfully"
        );
        setStatus("success");
        reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus("idle"), 3000); // Reset status to idle after 3 seconds
    }
  };
  // const onSubmit = async (values: ContactForm) => {
  //   setIsSubmitting(true);
  //   const response = await sendEmail(values);
  //   if (response) {
  //     await sendEmail(values, values.email, "Your Email Is Sent Successfully");
  //     setIsSubmitting(false);
  //     reset();
  //   }
  //   setIsSubmitting(false);
  // };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const heroSectionParams = {
    coverPath: "/images/it-services-4-asx-cuw3-2.jpg",
    maxHeight: isMobile ? "300px" : "500px",

    renderContent: () => {
      return (
        <>
          <h3 className="text-2xl">
            DIVATEX – Logiciel métier pour le textile
          </h3>
          <h1 className="mx-auto lg:text-7xl text-3xl lg:w-[850px] mt-8">
            Besoin d’informations sur notre ERP ?
          </h1>
          <p className="mt-12 text-sm lg:w-[650px] mx-auto">
            Pour des solutions personnalisées ou pour plus d’informations sur
            notre ERP, notre équipe d’experts est à votre écoute. Entamons
            ensemble le dialogue de votre transformation numérique.
          </p>
        </>
      );
    },
  };

  const contactArray: IContactInfo[] = CONTACT_ARRAY;

  return (
    <div className="w-full bg-gray-100 ">
      <HeroSection data={heroSectionParams} />

      <div className="max-w-[var(--max-content-width)] px-5 mx-auto py-16">
        <form
          className="max-w-[800px] mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nom
              </label>
              <Input
                type="text"
                id="first_name"
                {...register("firstName")}
                className="block w-full text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="John"
                isInvalid={errors.firstName && true}
                errorMessage={errors.firstName?.message}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Prénom
              </label>
              <Input
                type="text"
                id="last_name"
                {...register("lastName")}
                className="block w-full text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Doe"
                isInvalid={errors.lastName ? true : false}
                errorMessage={"Ce champ est obligatoire."}
                color="default"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Entreprise
              </label>
              <Input
                {...register("company")}
                type="text"
                id="company"
                className="block w-full text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Diva-Software"
                isInvalid={errors.company ? true : false}
                errorMessage={"Ce champ est obligatoire."}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Téléphone
              </label>
              <Input
                type="tel"
                {...register("phone")}
                id="phone"
                isInvalid={errors.phone ? true : false}
                errorMessage={errors.phone?.message}
                className="block w-full text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="xxxxxxx or +(country code) your number"
              />
            </div>
          </div>

          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <Input
            isInvalid={errors.email ? true : false}
            errorMessage={"Ce champ est obligatoire."}
            {...register("email")}
            id="email"
            className="block w-full text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="john.doe@company.com"
          />

          <label
            htmlFor="message"
            className="block mt-2 mb-2 text-sm font-medium text-gray-900"
          >
            Message
          </label>
          <Textarea
            isInvalid={errors.message ? true : false}
            errorMessage={"Ce champ est obligatoire."}
            {...register("message")}
            id="message"
            rows={4}
            className="block w-full text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Votre message..."
          ></Textarea>

          <div className="flex flex-row items-center gap-1">
            <Button
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </Button>
            <span>
              {status === "success" && (
                <CiCircleCheck className="w-5 h-5 text-green-700" />
              )}
              {status === "error" && (
                <IoIosCloseCircleOutline className="w-5 h-5 text-red-500" />
              )}
            </span>
          </div>

          {/* <Button
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-8"
          >
            Submit
          </Button> */}
        </form>
      </div>

      <div className="max-w-[var(--max-content-width)] mx-auto pb-12 text-center">
        <p className="text-2xl text--[#191919]">Où nous trouver</p>
        <h1 className="lg:text-7xl text-5xl text-[#191919] mt-8 lg:w-[850px] mx-auto font-thin leading-normal">
          Nos bureaux en <strong className="font-bold">Europe</strong> et en{" "}
          <strong className="font-bold">Afrique du Nord</strong>
        </h1>

        <div className="flex flex-row flex-wrap items-center justify-center gap-12 mt-12">
          {contactArray.map((contact, index) => {
            return (
              <div
                className="text-[#191919] shadow-sm p-8 w-[400px] flex flex-col gap-4"
                key={index}
              >
                <p className="text-2xl font-bold">{contact.location}</p>
                <p className="text-xs">{contact.addresse}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[#0E5EFF] w-fit mx-auto"
                >
                  {contact.email}
                </a>
                <a
                  href={`tel:${contact.phone}`}
                  className="w-fit mx-auto text-[#0E5EFF] rounded-xl py-2 px-4 border border-[#0E5EFF] hover:bg-[#0E5EFF] hover:text-white transition-all duration-300"
                >
                  {contact.phone}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
