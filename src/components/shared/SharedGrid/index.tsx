import { ReactNode } from "react";
import { InlineWidget } from "react-calendly";
import { useTranslation } from "react-i18next";
import ContactUsForm from "../contactUsForm";

export default function SharedGrid({
  children,
  demoCard = false,
}: Readonly<{ children: ReactNode; demoCard?: boolean }>) {
  const { t } = useTranslation();

  return (
    <section className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-2 lg:px-0">
      <div className="relative flex-col justify-center gap-20 p-4 border dark:border-0 rounded-xl lg:flex">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-right bg-no-repeat bg-cover rounded-xl"
          style={{
            backgroundImage: "url('images/grid-bg.svg')",
            backgroundPosition: "right -100px center",
            opacity: 0.5,
            zIndex: -1,
          }}
        ></div>
        {/* Content */}
        {children}
      </div>
      <div className="h-full bg-white border rounded-xl">
        {demoCard ? (
          <InlineWidget
            url="https://calendly.com/rochdi-ktir"
            styles={{
              height: "100%",
            }}
          />
        ) : (
          <ContactUsForm t={t} />
        )}
      </div>
    </section>
  );
}
