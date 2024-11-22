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
import SharedCard from "../shared/SharedCard";

export default function TextileErpFeatures() {
  const { t } = useTranslation();
  const sectionsData: subSectionsProps[] = t("ErpSection.subSections", {
    returnObjects: true,
  }) as subSectionsProps[];

  return (
    <section id="textile-features" className="z-50">
      <CentredLayout>
        {sectionsData.map((element: subSectionsProps, index: number) => (
          <div
            key={index}
            className={cn(
              "flex flex-col gap-16 px-4 lg:px-0",
              index !== 0 && "mt-32"
            )}
          >
            <div className="flex flex-col gap-8 lg:w-4/5">
              <div className="text-3xl font-semibold text-left lg:text-5xl ">
                <h1 className="block text-black dark:text-white">
                  {element.subsectionTitle.title}
                </h1>
                <h1 className="text-left text-black dark:text-white">
                  {element.subsectionTitle.grayTitle}
                </h1>
              </div>
              <p className="text-sm font-normal text-gray-600 dark:text-slate-300 ">
                {element.subSectionDescription}
              </p>
            </div>

            <div
              className={cn(
                "grid gap-3 grid-cols-1",
                index === 0
                  ? "lg:grid-cols-[repeat(auto-fill,_minmax(500px,_1fr))]"
                  : "lg:grid-cols-4"
              )}
            >
              {element.cards.map(
                (item: featuresCardProps | solutionCardProps, idx: number) =>
                  index === 0 ? (
                    <FeaturesCard key={idx} item={item as featuresCardProps} />
                  ) : (
                    <SolutionsCard
                      key={idx}
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
function FeaturesCard({ item }: Readonly<{ item: featuresCardProps }>) {
  return (
    <SharedCard>
      <div className="flex flex-col">
        <h1 className="text-lg font-normal leading-loose text-gray-600 uppercase dark:text-white">
          {item.cardTitle}
        </h1>

        <div className="flex flex-col gap-3">
          <h1 className="font-semibold tracking-tighter text-left text-transparent bg-gradient-to-t from-slate-600 to-neutral-900 bg-clip-text text-8xl dark:text-white">
            {item.cardNumber}
          </h1>

          <p className="text-base leading-tight text-gray-600 dark:text-white">
            {item.cardDescription}
          </p>
        </div>
      </div>
    </SharedCard>
  );
}
function SolutionsCard({
  item,
  index,
}: Readonly<{ item: solutionCardProps; index: number }>) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SharedCard setHoveredIndex={setHoveredIndex} index={index}>
      <div className="flex flex-col gap-4">
        <div className="min-h-16">
          <Image
            width={50}
            src={
              hoveredIndex === index ? item.coloredImagePath : item.imagePath
            }
            className=" group-hover:scale-110 dark:invert dark:group-hover:invert-0"
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold leading-loose text-black uppercase dark:text-white">
            {item.title}
          </h1>

          <p className="text-sm leading-tight text-black opacity-55 dark:text-white">
            {item.description}
          </p>
        </div>
      </div>
    </SharedCard>
  );
}
