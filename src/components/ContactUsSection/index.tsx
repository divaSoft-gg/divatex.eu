import { useTranslation } from "react-i18next";
import CentredLayout from "../ui/centredLayout";
import { FaArrowRightLong } from "react-icons/fa6";
import { locationProps } from "../../common/types";
import ContactUsForm from "../shared/contactUsForm";

export default function ContactUsSection() {
  const { t } = useTranslation();
  const location: locationProps[] = t("contactUs.places", {
    returnObjects: true,
  }) as locationProps[];
  return (
    <section id="contact-us" className="lg:max-h-[500px] ">
      <CentredLayout>
        <div className="flex flex-row gap-6 bg-[url('/images/cover.jpg')] bg-cover bg-center lg:rounded-2xl relative shadow-2xl h-[300px] lg:h-full">
          <div className="absolute inset-0 z-0 bg-black opacity-50 rounded-2xl"></div>

          <div className="z-10 flex-col justify-center hidden gap-20 p-4 lg:flex">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl text-white">{t("contactUs.title")}</h1>
              <p className="text-base text-white">
                {t("contactUs.description")}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-white">
                {t("contactUs.locationQuestion")}
              </p>

              <ul className="text-white ">
                {location.map((element: locationProps, index: number) => (
                  <li className="flex flex-row items-center gap-3" key={index}>
                    <FaArrowRightLong className="scale-75" />
                    <h1>
                      <strong>{element.country}: </strong>
                      {element.address}
                    </h1>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white shadow-2xl h-fit rounded-2xl lg:w-[700px] w-[90%] mx-auto relative -bottom-8 lg:-bottom-20 lg:right-4">
            <ContactUsForm t={t} />
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}
