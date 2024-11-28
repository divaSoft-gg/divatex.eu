import { Button, Link } from "@nextui-org/react";
import CentredLayout from "../../ui/centredLayout";
import { useTranslation } from "react-i18next";
import { scrollToTop } from "../../../common/utils";

export default function DemoCallToAction() {
  const { t } = useTranslation();

  return (
    <section id="call-to-action" className="px-4 lg:px-0">
      <CentredLayout>
        <div className="relative flex items-center justify-between overflow-hidden bg-white bg-cover lg:flex-row dark:bg-black">
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
        </div>
      </CentredLayout>
    </section>
  );
}
