import { Helmet } from "react-helmet-async";
import FeaturesSection from "../../components/featuresSection";
import HeroSection from "../../components/heroSection";
import OurClients from "../../components/ourClients";
import { useTranslation } from "react-i18next";
import ContactUsSection from "../../components/ContactUsSection";
import TextileErpFeatures from "../../components/TextileErpFeatures";
import DemoCallToAction from "../../components/shared/DemoCallToAction";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-24 lg:gap-44">
      <Helmet>
        <title>{t("helmetPagesDescription.home.pageTitle")}</title>
        <meta
          name="description"
          content={t("helmetPagesDescription.home.pageDescription")}
        />
      </Helmet>
      <HeroSection />
      <OurClients />
      <FeaturesSection />
      <DemoCallToAction />
      <TextileErpFeatures />
      <DemoCallToAction />

      <ContactUsSection />
    </div>
  );
}
