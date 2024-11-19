import { Button, Image } from "@nextui-org/react";
import CentredLayout from "../ui/centredLayout";
import { useTranslation } from "react-i18next";
import { featuresProps } from "../../common/types";

export default function FeaturesSection() {
  const { t } = useTranslation();

  const featuresCol1: featuresProps[] = t("featuresSection.featuresCol1", {
    returnObjects: true,
  }) as featuresProps[];
  const featuresCol2: featuresProps[] = t("featuresSection.featuresCol2", {
    returnObjects: true,
  }) as featuresProps[];

  return (
    <section id="features-section">
      <CentredLayout>
        <div className="flex flex-col gap-6 px-4 lg:px:0">
          <div className="flex flex-col items-center justify-between gap-3 lg:flex-row ">
            <h1 className="text-3xl font-semibold leading-relaxed text-center lg:text-start lg:text-5xl">
              {t("featuresSection.sectionTitle")}
            </h1>
            <Button
              variant="flat"
              className="text-white bg-black rounded-2xl dark:text-black dark:bg-white"
            >
              Voir Plus
            </Button>
          </div>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-[500px_1fr]">
            {featuresCol1.map((element: featuresProps, index: number) => (
              <FeaturesCard key={index} element={element} index={index} />
            ))}
          </div>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-[1fr_500px]">
            {featuresCol2.map((element: featuresProps, index: number) => (
              <FeaturesCard key={index} element={element} index={index} />
            ))}
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}

function FeaturesCard({
  element,
  index,
}: Readonly<{ element: featuresProps; index: number }>) {
  return (
    <div
      key={index}
      className="min-h-[33pc] p-8 bg-[#F7F7F7] rounded-xl dark:bg-[#161616]"
    >
      <div className="flex flex-col gap-8">
        <h1 className="self-start text-4xl font-medium text-left text-black dark:text-white">
          {element.title}
        </h1>
        <small>{element.description}</small>
        <div className="flex items-center justify-center">
          <Image src={element.imagePreview} width={300} />
        </div>
      </div>
    </div>
  );
}
