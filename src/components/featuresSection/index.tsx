import { Button, Image, Link } from "@nextui-org/react";
import CentredLayout from "../ui/centredLayout";
import { useTranslation } from "react-i18next";
import { featuresProps } from "../../common/types";
import { scrollToTop } from "../../common/utils";
import SharedCard from "../shared/SharedCard";

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features: featuresProps[] = t("featuresSection.features", {
    returnObjects: true,
  }) as featuresProps[];

  return (
    <section id="features-section">
      <CentredLayout>
        <div className="flex flex-col gap-6 px-4 lg:px:0">
          <div className="flex flex-col justify-between gap-8 lg:flex-row ">
            <h1 className="text-3xl font-semibold leading-tight lg:text-start lg:text-5xl">
              {t("featuresSection.sectionTitle")}
            </h1>
            <Button
              as={Link}
              href="/erp"
              onClick={() => scrollToTop()}
              variant="flat"
              className="text-white bg-black rounded-2xl dark:text-black dark:bg-white"
            >
              Voir Plus
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {features.map((element: featuresProps, index: number) => (
              <FeaturesCard key={index} element={element} />
            ))}
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}

function FeaturesCard({ element }: Readonly<{ element: featuresProps }>) {
  return (
    <SharedCard>
      <div className="flex flex-col gap-8">
        <h1 className="self-start text-4xl font-medium text-left text-black dark:text-white">
          {element.title}
        </h1>
        <small>{element.description}</small>
        <div className="flex items-center justify-center">
          <Image src={element.imagePreview} width={300} />
        </div>
      </div>
    </SharedCard>
  );
}
