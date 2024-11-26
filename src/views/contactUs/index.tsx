import { useTranslation } from "react-i18next";
import CentredLayout from "../../components/ui/centredLayout";
import { locationsProps, socialsProps } from "../../common/types";
import { MdOutlineEmail, MdOutlinePhoneEnabled } from "react-icons/md";

import { Avatar } from "@nextui-org/react";
import SharedCard from "../../components/shared/SharedCard";
import SharedGrid from "../../components/shared/SharedGrid";

export default function ContactUsView() {
  const { t } = useTranslation();
  const socials: socialsProps[] = t("contactUs.socials", {
    returnObjects: true,
  }) as socialsProps[];
  const locations: locationsProps[] = t("contactUs.locations", {
    returnObjects: true,
  }) as locationsProps[];
  return (
    <section id="contact-us" className="my-8">
      <CentredLayout>
        <div className="flex flex-col gap-12 px-4 lg:px-0 ">
          <SharedGrid>
            <div className="flex flex-col justify-center gap-20 ">
              <div className="flex flex-col w-full gap-12">
                <h6 className="text-black custom-heading ">
                  {t("contactUs.sectionTitleView")}
                </h6>
                <p className="text-black custom-description">
                  {t("contactUs.description")}
                </p>

                <div>
                  <p className="text-base font-semibold tracking-tight text-black dark:text-black">
                    {t("contactUs.contactUsAt")}
                  </p>
                  {socials.map((element: socialsProps, index: number) => (
                    <p
                      key={index}
                      className="text-sm leading-tight text-left text-gray-700 dark:text-black"
                    >
                      {element.answer}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </SharedGrid>
          <section>
            <h1 className="custom-heading">{t("contactUs.locationTitle")}</h1>
            <div className="grid grid-cols-1 gap-3 mt-8 lg:grid-cols-3">
              {locations.map((element, index) => (
                <LocationCard key={index} element={element} />
              ))}
            </div>
          </section>
        </div>
      </CentredLayout>
    </section>
  );
}

function LocationCard({ element }: Readonly<{ element: locationsProps }>) {
  return (
    <SharedCard>
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-row items-center justify-start gap-2">
          <Avatar src={element.flag} size="sm" className="scale-75" />
          <p className="text-2xl font-bold text-black uppercase dark:text-white">
            {element.countryName}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-black text-start text-medium font-regular dark:text-white">
            {element.address}
          </p>
          <img
            src={element.map}
            width={100}
            className="self-center dark:invert"
          />
        </div>
        <ul className="self-start">
          {element.list.map((element: string, idx: number) => (
            <li
              key={idx}
              className=" text-[#161616]  dark:text-white flex flex-row gap-2 items-center"
            >
              {idx === 0 ? <MdOutlineEmail /> : <MdOutlinePhoneEnabled />}
              {element}
            </li>
          ))}
        </ul>
      </div>
    </SharedCard>
  );
}
