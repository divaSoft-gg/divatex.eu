import { Button, Image, Link } from "@nextui-org/react";
import CentredLayout from "../../ui/centredLayout";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { cn, scrollToTop } from "../../../common/utils";

export default function DemoCallToAction() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <section
      id="call-to-action"
      className={cn(
        "py-16 lg:px-0",
        location.pathname === "/"
          ? "bg-[#F8FAFC] dark:bg-[#161616]"
          : "bg-white dark:bg-black"
      )}
    >
      <CentredLayout>
        <div className="flex items-center justify-between p-6 overflow-hidden bg-white bg-cover border rounded-lg lg:flex-row dark:bg-black">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">
              {t("demoCallToAction.title")}
            </h1>
            <p className="text-sm text-black lg:w-4/5 lg:text-base opacity-60 dark:text-white">
              {t("demoCallToAction.description")}
            </p>
            <Button
              as={Link}
              href="/demo"
              onClick={() => scrollToTop()}
              size="lg"
              className="max-w-lg dark:bg-white dark:text-black"
              color="primary"
            >
              {t("demoCallToAction.buttonText")}
            </Button>
          </div>
          <div className="hidden lg:block">
            <Image
              src="images/demo-call-to-action/cover.webp"
              width={350}
              className="dark:invert"
            />
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}
