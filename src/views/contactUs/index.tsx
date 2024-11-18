import { useTranslation } from "react-i18next";
import CentredLayout from "../../components/ui/centredLayout";
import ContactUsForm from "../../components/shared/contactUsForm";
import { locationsProps, socialsProps } from "../../common/types";
import { MdOutlineEmail, MdOutlinePhoneEnabled } from "react-icons/md";

import { Avatar } from "@nextui-org/react";

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
        <div className="flex flex-col gap-12">
          <div className="flex flex-col w-full gap-6 p-4 lg:gap-0 lg:p-0 lg:flex-row">
            <div className="flex flex-col w-full gap-12 ">
              <h6 className="font-semibold text-left text-black text-7xl dark:text-white">
                {t("contactUs.sectionTitleView")}
              </h6>
              <p className="text-left text-gray-700 text-medium w-96 dark:text-white">
                {t("contactUs.description")}
              </p>
              <ul className="flex flex-col w-full gap-4 list-none lg:pb-0">
                <li>
                  <h6 className="text-sm font-semibold tracking-wide text-gray-500 dark:text-white">
                    {t("contactUs.contactUsAt")}
                  </h6>
                </li>
                {socials.map((element: socialsProps, index: number) => (
                  <li key={index}>
                    <span className="text-left text-gray-700 text-medium w-96 dark:text-white">
                      {element.answer}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <ContactUsForm t={t} />
          </div>
          <h1 className="self-center text-2xl font-semibold">
            {t("contactUs.locationTitle")}
          </h1>
          <div className="grid erpGrid">
            {locations.map((element, index) => (
              <LocationCard key={index} element={element} index={index} />
            ))}
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}

function LocationCard({
  element,
  index,
}: Readonly<{ element: locationsProps; index: number }>) {
  return (
    <div
      role="presentation"
      key={index}
      className="flex flex-col gap-10 p-8 bg-center bg-cover border cursor-pointer group feature-card dark:bg-[#161616]"
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <Avatar src={element.flag} size="sm" />
        <p className="text-2xl font-bold text-black uppercase dark:text-white ">
          {element.countryName}
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <p className="text-center text-black text-medium font-regular dark:text-white">
          {element.address}
        </p>
        <img src={element.map} width={100} className="dark:invert" />
      </div>
      <ul className="pl-6 ">
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
  );
}
