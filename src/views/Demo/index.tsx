import { useTranslation } from "react-i18next";
import CentredLayout from "../../components/ui/centredLayout";
import { demoStepsProps } from "../../common/types";
import { InlineWidget } from "react-calendly";
import AutoplayCarousel from "../../components/ourClients/carousel";

export default function DemoView() {
  const { t } = useTranslation();
  const steps: demoStepsProps[] = t("demo.steps", {
    returnObjects: true,
  }) as demoStepsProps[];
  return (
    <section id="contact-us">
      <CentredLayout>
        <div className="flex flex-col gap-20 px-4 my-10 lg:px-0">
          <div className=" lg:h-full h-[300px] lg:min-h-full flex flex-row gap-6 bg-[url('/images/cover.jpg')] bg-cover bg-center lg:rounded-2xl  relative shadow-md">
            <div className="absolute inset-0 z-0 bg-black opacity-50 rounded-2xl"></div>

            <div className="z-10 flex-col justify-center hidden w-2/3 gap-20 p-4 lg:flex">
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl text-white ">
                  {t("demo.sectionTitle")}
                </h1>
                <p className="text-base text-white ">
                  {t("contactUs.description")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-white ">
                  {" "}
                  {t("demo.stepsTitle")}
                </p>
                <ol className="space-y-2 text-white list-decimal ">
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
            <div className="bg-white shadow-2xl rounded-2xl lg:w-[700px] w-[90%] mx-auto relative -bottom-8 lg:-bottom-20 lg:right-4">
              <InlineWidget
                url="https://calendly.com/rochdi-ktir"
                styles={{
                  height: "100%",
                }}
              />
            </div>
          </div>
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
