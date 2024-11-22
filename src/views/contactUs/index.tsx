import { useTranslation } from "react-i18next";
import CentredLayout from "../../components/ui/centredLayout";
import ContactUsForm from "../../components/shared/contactUsForm";
import { locationsProps, socialsProps } from "../../common/types";
import { MdOutlineEmail, MdOutlinePhoneEnabled } from "react-icons/md";

import { Avatar } from "@nextui-org/react";
import DemoCallToAction from "../../components/shared/DemoCallToAction";

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
        <div className="flex flex-col gap-12 px-4 lg:px-0">
          <section className="flex flex-col w-full gap-16 lg:flex-row">
            <div className="flex flex-col w-full gap-12">
              <h6 className="custom-heading">
                {t("contactUs.sectionTitleView")}
              </h6>
              <p className="custom-description">{t("contactUs.description")}</p>

              <div>
                <p className="text-base font-semibold tracking-tight text-black dark:text-white">
                  {t("contactUs.contactUsAt")}
                </p>
                {socials.map((element: socialsProps, index: number) => (
                  <p
                    key={index}
                    className="text-sm leading-tight text-left text-gray-700 dark:text-white"
                  >
                    {element.answer}
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md w-full mx-auto lg:min-w-[500px]">
              <ContactUsForm t={t} />
            </div>
          </section>
          <DemoCallToAction />

          <section>
            <h1 className="custom-heading">{t("contactUs.locationTitle")}</h1>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] mt-8">
              {locations.map((element, index) => (
                <LocationCard key={index} element={element} index={index} />
              ))}
            </div>
          </section>
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
