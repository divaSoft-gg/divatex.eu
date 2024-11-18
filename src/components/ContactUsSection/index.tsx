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
        <div className="flex flex-col gap-8 lg:px-0">
          <div className="flex flex-row gap-6 bg-[url('/images/cover.jpg')] bg-cover bg-center  lg:rounded-2xl   relative shadow-2xl  min-h-[300px] lg:min-h-full ">
            <div className="absolute inset-0 z-0 bg-black opacity-50 rounded-2xl"></div>

            <div className="z-10 flex flex-col justify-center gap-6 p-8 lg:w-2/3">
              <h1 className="hidden text-5xl text-white lg:block">
                {t("contactUs.title")}
              </h1>
              <p className="hidden text-base text-white lg:block">
                {t("contactUs.description")}
              </p>
              <p className="hidden text-white lg:block">
                {" "}
                {t("contactUs.locationQuestion")}
              </p>
              <ul className="hidden space-y-2 text-white lg:block">
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
            <div className="absolute w-[90%]  p-6 translate-x-1/2 lg:translate-x-0  bg-white shadow-2xl lg:w-1/3 lg:right-5  right-1/2 top-10 rounded-2xl">
              <ContactUsForm t={t} />
            </div>
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}
