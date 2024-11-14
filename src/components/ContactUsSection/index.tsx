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
    <section id="contact-us">
      <CentredLayout>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-6 bg-[url('/images/cover.jpg')] bg-cover bg-center rounded-2xl  relative shadow-2xl ">
            <div className="absolute inset-0 z-0 bg-black opacity-50 rounded-2xl"></div>

            <div className="z-10 flex flex-col justify-center w-2/3 gap-6 p-8">
              <h1 className="text-5xl text-white">{t("contactUs.title")}</h1>
              <p className="text-base text-white">
                {t("contactUs.description")}
              </p>
              <p className="text-white"> {t("contactUs.locationQuestion")}</p>
              <ul className="space-y-2 text-white">
                {location.map((element: locationProps, index: number) => (
                  <li className="flex flex-row items-center gap-3" key={index}>
                    <FaArrowRightLong />
                    <h1>
                      <strong>{element.country} :</strong>
                      {element.address}
                    </h1>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute w-1/3 p-6 bg-white shadow-2xl right-5 top-10 rounded-2xl">
              <ContactUsForm t={t} />
            </div>
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}
