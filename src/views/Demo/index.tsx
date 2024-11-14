import { useTranslation } from "react-i18next";
import CentredLayout from "../../components/ui/centredLayout";
import { demoStepsProps } from "../../common/types";
import { InlineWidget } from "react-calendly";

export default function DemoView() {
  const { t } = useTranslation();
  const steps: demoStepsProps[] = t("demo.steps", {
    returnObjects: true,
  }) as demoStepsProps[];
  return (
    <section id="contact-us">
      <CentredLayout>
        <div className="flex flex-col gap-8 my-10">
          <div className="flex flex-row gap-6 bg-[url('/images/cover.jpg')] bg-cover bg-center rounded-2xl  relative shadow-2xl ">
            <div className="absolute inset-0 z-0 bg-black opacity-50 rounded-2xl"></div>

            <div className="z-10 flex flex-col justify-center w-2/3 gap-6 p-8">
              <h1 className="text-5xl text-white">{t("contactUs.title")}</h1>
              <p className="text-base text-white">
                {t("contactUs.description")}
              </p>
              <p className="text-white"> {t("contactUs.locationQuestion")}</p>
              <ol className="space-y-2 text-white list-decimal">
                {steps.map((element: demoStepsProps, index: number) => (
                  <li key={index}>
                    <h1>
                      <strong>{element.title} :</strong>
                      {element.tooltip}
                    </h1>
                  </li>
                ))}
              </ol>
            </div>
            <div className="absolute w-1/3 h-full bg-white shadow-2xl right-5 top-10 ">
              <InlineWidget
                url="https://calendly.com/rochdi-ktir"
                styles={{
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}
