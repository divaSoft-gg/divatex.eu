import { useTranslation } from "react-i18next";
import CentredLayout from "../../components/ui/centredLayout";
import { demoStepsProps } from "../../common/types";
import AutoplayCarousel from "../../components/ourClients/carousel";
import SharedGrid from "../../components/shared/SharedGrid";

export default function DemoView() {
  const { t } = useTranslation();
  const steps: demoStepsProps[] = t("demo.steps", {
    returnObjects: true,
  }) as demoStepsProps[];
  return (
    <section id="contact-us">
      <CentredLayout>
        <div className="flex flex-col gap-20 px-4 my-10 lg:px-0">
          <SharedGrid demoCard={true}>
            <div className="z-10 flex flex-col justify-center gap-20 p-4">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl text-black dark:text-white">
                  {t("demo.sectionTitle")}
                </h1>
                <p className="text-base text-black dark:text-white ">
                  {t("contactUs.description")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-black dark:text-white ">
                  {" "}
                  {t("demo.stepsTitle")}
                </p>
                <ol className="px-4 space-y-2 text-black list-decimal dark:text-white">
                  {steps.map((element: demoStepsProps, index: number) => (
                    <li key={index}>
                      <h1 className="text-sm">
                        <strong>{element.title} :</strong>
                        {element.tooltip}
                      </h1>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </SharedGrid>

          <div className="flex flex-col w-full gap-2 mt-8">
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
        </div>
      </CentredLayout>
    </section>
  );
}
