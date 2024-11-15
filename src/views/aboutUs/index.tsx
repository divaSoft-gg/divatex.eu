import { Image } from "@nextui-org/react";
import { cn } from "../../common/utils";
import CentredLayout from "../../components/ui/centredLayout";
import { useTranslation } from "react-i18next";
import { aboutUsProps } from "../../common/types";

export default function AboutUs() {
  const { t } = useTranslation();
  const aboutUsSection: aboutUsProps[] = t("aboutus.timeline", {
    returnObjects: true,
  }) as aboutUsProps[];
  return (
    <section id="aboutUs-view">
      <CentredLayout>
        <div className="flex flex-col gap-24">
          {aboutUsSection.map((element: aboutUsProps, index: number) => (
            <div
              className={cn(
                "flex  gap-10 w-full",
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className="flex flex-col items-start justify-start flex-1 gap-6 ">
                <p className="text-xl font-bold text-gray-400">
                  {element.year}
                </p>
                <h1 className="text-xl font-bold text-black">
                  {element.sectionTitle}
                </h1>
                <p className="w-2/3 font-semibold text-gray-600">
                  {element.sectionDescription}
                </p>
              </div>
              <div className="flex-1">
                <Image src={element.imagePath} className="bg-cover " />
              </div>
            </div>
          ))}
        </div>
      </CentredLayout>
    </section>
  );
}
