import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import CentredLayout from "../ui/centredLayout";
import { useTranslation } from "react-i18next";
import { featuresProps } from "../../common/types";
import { useState, useEffect, useCallback } from "react";
import { cn } from "../../common/utils";

export default function FeaturesSection() {
  const { t } = useTranslation();
  const features: featuresProps[] = t("featuresSection.features", {
    returnObjects: true,
  }) as featuresProps[];

  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(["0"]));
  const [selectedImage, setSelectedImage] = useState(features[0].imagePreview);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = useCallback(
    (index: number) => {
      setSelectedKeys(new Set([index.toString()]));
      setSelectedImage(features[index].imagePreview);
    },
    [features]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % features.length;
      setCurrentIndex(newIndex);
      handleChange(newIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, features.length, handleChange]);

  return (
    <section id="features-section">
      <CentredLayout>
        <div className="flex flex-row gap-6">
          <Accordion
            showDivider={false}
            selectedKeys={selectedKeys}
            onSelectionChange={(e: any) => {
              const selectedKey = e.currentKey;
              const newIndex = parseInt(selectedKey, 10);
              setCurrentIndex(newIndex);
              handleChange(newIndex);
            }}
          >
            {features.map((element: featuresProps, index: number) => (
              <AccordionItem
                className={cn(
                  "p-2 py-6 rounded-2xl",
                  selectedKeys.has(index.toString()) &&
                    "bg-gray-200 dark:bg-[#161616]"
                )}
                hideIndicator
                key={index}
                aria-label={`Accordion ${index}`}
                title={
                  <h1 className="text-lg text-black dark:text-white">
                    {element.title}
                  </h1>
                }
                startContent={
                  <Image
                    src={element.icon}
                    width={50}
                    className="dark:invert"
                  />
                }
              >
                {element.description}
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex items-center w-full">
            <Image src={selectedImage} className="max-h-min" />
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}
