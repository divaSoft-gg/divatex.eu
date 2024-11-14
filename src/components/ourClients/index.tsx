import CenteredLayout from "../ui/centredLayout";
import { useTranslation } from "react-i18next";
import AutoplayCarousel from "./carousel";

export default function OurClients() {
  const { t } = useTranslation();

  return (
    <section
      id="our-clients"
      className="dark:bg-[#161616] bg-black py-8 lg:px-0 px-4"
    >
      <CenteredLayout>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="">
            <h1 className="pb-3 text-4xl font-semibold leading-normal text-left text-white lg:text-6xl">
              {t("ourClients.title")}
            </h1>
            <p className="mt-2 leading-8 text-white lg:text-lg text-md muted ">
              {t("ourClients.description")}
            </p>
          </div>
          <div className="w-full lg:w-[60%] flex flex-col gap-2">
            {[0, 1].map((element) => (
              <AutoplayCarousel
                invert={false}
                key={element}
                directionClass={
                  element === 0 ? "animate-slideRtl" : "animate-slideLtr"
                }
                elementIndex={element}
              />
            ))}
          </div>
        </div>
      </CenteredLayout>
    </section>
  );
}
