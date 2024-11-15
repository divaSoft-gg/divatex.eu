import { Image } from "@nextui-org/react";
import CentredLayout from "../ui/centredLayout";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { featuresCardProps, solutionCardProps } from "../../common/types";

export default function TextileErpFeatures() {
  const { t } = useTranslation();
  const featuresCards: featuresCardProps[] = t(
    "ErpSection.subSectionOne.cards",
    { returnObjects: true }
  ) as featuresCardProps[];
  const solutionsCards: solutionCardProps[] = t(
    "ErpSection.subSectionTwo.cards",
    {
      returnObjects: true,
    }
  ) as solutionCardProps[];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="textile-features" className="py-12 ">
      <CentredLayout>
        <div className="flex flex-col gap-24 px-4 lg:px-0">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col w-1/2 gap-8">
              <div className="text-5xl font-bold text-left ">
                <h1 className="block text-black opacity-70 dark:text-white">
                  {t("ErpSection.subSectionOne.subsectionTitle.title")}
                </h1>
                <h1 className="text-left text-gray-600 dark:text-slate-300">
                  {t("ErpSection.subSectionOne.subsectionTitle.grayTitle")}
                </h1>
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-slate-300 ">
                {t("ErpSection.subSectionOne.subSectionDescription")}
              </p>
            </div>

            <div className="grid gap-6 advantagesCardGrid">
              {featuresCards.map(
                (element: featuresCardProps, index: number) => (
                  <div
                    key={index}
                    className="relative flex flex-col gap-8 p-5 shadow-md bg-gradient-to-bl from-zinc-50 to-gray-50 rounded-2xl dark:bg-gradient-to-tr dark:from-stone-900 dark:to-slate-700"
                  >
                    <h1 className="mb-6 text-lg font-bold leading-loose text-gray-600 dark:text-white">
                      {element.cardTitle}
                    </h1>

                    <h1 className="font-bold text-left text-transparent bg-gradient-to-t from-slate-600 to-neutral-900 bg-clip-text text-7xl dark:text-white">
                      {element.cardNumber}
                    </h1>

                    <p className="text-lg font-bold leading-loose text-gray-600 dark:text-white">
                      {element.cardDescription}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-semibold text-center text-black dark:text-white">
              {t("ErpSection.subSectionTwo.sectonTitle")}
            </h1>
            <p className="text-sm font-bold text-center">
              {t("ErpSection.subSectionTwo.sectionDescription")}
            </p>
            <div className="grid gap-6 advantagesCardGrid">
              {solutionsCards.map(
                (element: solutionCardProps, index: number) => (
                  <div
                    role="presentation"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="flex flex-col gap-3 p-6 shadow-md cursor-pointer bg-gradient-to-bl from-zinc-50 to-gray-50 rounded-2xl group dark:bg-gradient-to-tr dark:from-stone-900 dark:to-slate-700"
                  >
                    <Image
                      width={50}
                      src={
                        hoveredIndex === index
                          ? element.coloredImagePath
                          : element.imagePath
                      }
                      className="group-hover:scale-110 dark:invert dark:group-hover:invert-0"
                    />
                    <h1 className="text-xl font-bold text-black dark:text-white ">
                      {element.title}
                    </h1>
                    <p className="text-sm font-semibold text-black dark:text-white">
                      {element.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}
