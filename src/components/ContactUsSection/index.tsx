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
        <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-2 lg:px-0">
          <div className="flex-col justify-center gap-20 p-4 border rounded-lg lg:flex bg-gradient-to-tr from-slate-100 to-zinc-300">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl text-black">{t("contactUs.title")}</h1>
              <p className="text-base text-black">
                {t("contactUs.description")}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-black">
                {t("contactUs.locationQuestion")}
              </p>

              <ul className="text-black ">
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
          <div className="border rounded-lg bg-gradient-to-tr from-stone-100 to-slate-200">
            <ContactUsForm t={t} />
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}
