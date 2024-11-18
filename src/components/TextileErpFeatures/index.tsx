import { Image } from "@nextui-org/react";
import CentredLayout from "../ui/centredLayout";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  featuresCardProps,
  solutionCardProps,
  subSectionsProps,
} from "../../common/types";
import { cn } from "../../common/utils";

export default function TextileErpFeatures() {
  const { t } = useTranslation();
  const sectionsData: subSectionsProps[] = t("ErpSection.subSections", {
    returnObjects: true,
  }) as subSectionsProps[];

  return (
    <section id="textile-features">
      <CentredLayout>
        {sectionsData.map((element: subSectionsProps, index: number) => (
          <div className={cn("flex flex-col gap-16", index !== 0 && "mt-32")}>
            <div className="flex flex-col w-4/5 gap-8">
              <div className="text-5xl font-bold text-left ">
                <h1 className="block text-black opacity-70 dark:text-white">
                  {element.subsectionTitle.title}
                </h1>
                <h1 className="text-left text-black opacity-70 dark:text-slate-300">
                  {element.subsectionTitle.grayTitle}
                </h1>
              </div>
              <p className="text-sm font-normal text-gray-600 dark:text-slate-300 ">
                {element.subSectionDescription}
              </p>
            </div>

            <div className="grid gap-6 advantagesCardGrid">
              {element.cards.map(
                (item: featuresCardProps | solutionCardProps, idx: number) =>
                  index === 0 ? (
                    <FeaturesCard
                      item={item as featuresCardProps}
                      index={index}
                    />
                  ) : (
                    <SolutionsCard
                      item={item as solutionCardProps}
                      index={idx}
                    />
                  )
              )}
            </div>
          </div>
        ))}
      </CentredLayout>
    </section>
  );
}
function FeaturesCard({
  item,
  index,
}: Readonly<{ item: featuresCardProps; index: number }>) {
  return (
    <div
      key={index}
      className="relative flex flex-col gap-12 p-5 shadow-sm bg-gradient-to-tr from-zinc-50 to-gray-50 rounded-2xl dark:bg-gradient-to-tr dark:from-stone-900 dark:to-slate-700"
    >
      <h1 className="text-lg font-normal leading-loose text-gray-600 uppercase dark:text-white">
        {item.cardTitle}
      </h1>

      <div>
        <h1 className="font-semibold tracking-tighter text-left text-transparent bg-gradient-to-t from-slate-600 to-neutral-900 bg-clip-text text-8xl dark:text-white">
          {item.cardNumber}
        </h1>

        <p className="text-base leading-loose text-gray-600 dark:text-white">
          {item.cardDescription}
        </p>
      </div>
    </div>
  );
}
function SolutionsCard({
  item,
  index,
}: Readonly<{ item: solutionCardProps; index: number }>) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      role="presentation"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="flex flex-col gap-3 p-6 shadow-md cursor-pointer bg-gradient-to-bl from-zinc-50 to-gray-50 rounded-2xl group dark:bg-gradient-to-tr dark:from-stone-900 dark:to-slate-700"
    >
      <h1 className="text-lg font-normal leading-loose text-gray-600 uppercase dark:text-white">
        {item.title}
      </h1>
      <Image
        width={50}
        src={hoveredIndex === index ? item.coloredImagePath : item.imagePath}
        className="group-hover:scale-110 dark:invert dark:group-hover:invert-0"
      />
      <p className="text-base leading-loose text-gray-600 dark:text-white">
        {item.description}
      </p>
    </div>
  );
}
