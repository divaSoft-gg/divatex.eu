import { Image } from "@nextui-org/react";
import { cn } from "../../common/utils";
import CentredLayout from "../../components/ui/centredLayout";
import { useTranslation } from "react-i18next";
import { aboutUsProps } from "../../common/types";
import { Helmet } from "react-helmet-async";
import AutoplayCarousel from "../../components/ourClients/carousel";

export default function AboutUs() {
  const { t } = useTranslation();
  const aboutUsSection: aboutUsProps[] = t("aboutus.timeline", {
    returnObjects: true,
  }) as aboutUsProps[];
  return (
    <section id="aboutUs-view" className="my-8">
      <Helmet>
        <title>{t("helmetPagesDescription.aboutus.pageTitle")}</title>
        <meta
          name="description"
          content={t("helmetPagesDescription.aboutus.pageDescription")}
        />
      </Helmet>
      <CentredLayout>
        <div className="flex flex-col gap-24 px-4 lg:px-0">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold text-left text-black lg:text-6xl dark:text-white">
              {t("aboutus.title")}
            </h1>
            <p className="text-lg text-left text-[#3C3D37] dark:text-white ">
              {t("aboutus.subtitle")}
            </p>
          </div>
          <div className="flex flex-col w-full gap-2">
            {[0, 1].map((element) => (
              <AutoplayCarousel
                invert={true}
                key={element}
                directionClass={
                  element === 0 ? "animate-slideRtl" : "animate-slideLtr"
                }
                elementIndex={element}
              />
            ))}
          </div>
          {aboutUsSection.map((element: aboutUsProps, index: number) => (
            <div
              key={index}
              className={cn(
                "flex  gap-32 w-full",
                index % 2 === 0
                  ? " flex-col-reverse lg:flex-row-reverse"
                  : "flex-col-reverse lg:flex-row"
              )}
            >
              <div className="flex flex-col items-center justify-center flex-1 gap-6 lg:items-start lg:justify-start ">
                <div>
                  <p className="text-base font-normal text-gray-400 dark:text-white">
                    {element.year}
                  </p>
                  <h1 className="text-4xl font-semibold text-black dark:text-white">
                    {element.sectionTitle}
                  </h1>
                </div>
                <p className="font-normal text-gray-600 dark:text-white">
                  {element.sectionDescription}
                </p>
              </div>
              <div className="flex-1">
                <Image src={element.imagePath} className="bg-cover -z-20" />
              </div>
            </div>
          ))}
        </div>
      </CentredLayout>
    </section>
  );
}
