import { useTranslation } from "react-i18next";
import CentredLayout from "../ui/centredLayout";
import { FaArrowRightLong } from "react-icons/fa6";
import { locationProps } from "../../common/types";
import SharedGrid from "../shared/SharedGrid";

export default function ContactUsSection() {
  const { t } = useTranslation();
  const location: locationProps[] = t("contactUs.places", {
    returnObjects: true,
  }) as locationProps[];
  return (
    <section id="contact-us">
      <CentredLayout>
        <SharedGrid>
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl text-black dark:text-white">
              {t("contactUs.title")}
            </h1>
            <p className="text-base text-black dark:text-white">
              {t("contactUs.description")}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-black dark:text-white">
              {t("contactUs.locationQuestion")}
            </p>

            <ul className="text-black dark:text-white ">
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
        </SharedGrid>
      </CentredLayout>
    </section>
  );
}
