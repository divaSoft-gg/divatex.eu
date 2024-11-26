import { ReactNode } from "react";
import ContactUsForm from "../contactUsForm";
import { useTranslation } from "react-i18next";
import { InlineWidget } from "react-calendly";
import { cn } from "../../../common/utils";

export default function SharedGrid({
  children,
  demoCard = false,
}: Readonly<{ children: ReactNode; demoCard?: boolean }>) {
  const { t } = useTranslation();

  return (
    <section className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-2 lg:px-0">
      <div className="flex-col justify-center gap-20 p-4 border rounded-lg lg:flex bg-gradient-to-tr from-slate-100 to-zinc-300">
        {children}
      </div>
      <div
        className={cn(
          "h-full border rounded-lg",
          demoCard
            ? "bg-white"
            : "bg-gradient-to-tr from-stone-100 to-slate-200"
        )}
      >
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
