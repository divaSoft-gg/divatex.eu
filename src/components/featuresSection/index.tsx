import { Button, Image } from "@nextui-org/react";
import CentredLayout from "../ui/centredLayout";
import { useTranslation } from "react-i18next";
import { featuresProps } from "../../common/types";
import { cn } from "../../common/utils";

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features: featuresProps[] = t("featuresSection.features", {
    returnObjects: true,
  }) as featuresProps[];

  return (
    <section id="features-section">
      <CentredLayout>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between ">
            <h1 className="text-5xl font-semibold leading-relaxed">
              {t("featuresSection.sectionTitle")}
            </h1>
            <Button
              variant="flat"
              className="text-white bg-black rounded-2xl dark:text-black dark:bg-white"
            >
              Voir Plus
            </Button>
          </div>

          {features
            .reduce<featuresProps[][]>((acc, _, i) => {
              console.log(acc);
              if (i % 2 === 0) acc.push(features.slice(i, i + 2));
              return acc;
            }, [])
            .map((row: featuresProps[], rowIndex: number) => (
              <div key={rowIndex} className="flex flex-row w-full gap-6 h-fit ">
                {row.map((element: featuresProps, index: number) => (
                  <div key={index} className={cn("", element.cardWidthClass)}>
                    <div className="min-h-[33pc] p-8 bg-gray-200 rounded-xl dark:bg-[#161616]">
                      <div className="flex flex-col gap-8">
                        <div className="flex flex-row items-center justify-center gap-4">
                          <img
                            src={element.icon}
                            width={25}
                            className="dark:invert"
                          />
                          <h1 className="self-center text-4xl font-medium text-black dark:text-white">
                            {element.title}
                          </h1>
                        </div>
                        <small>{element.description}</small>
                        <div className="flex items-center justify-center">
                          <Image src={element.imagePreview} width={300} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </CentredLayout>
    </section>
  );
}
