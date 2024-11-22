import CentredLayout from "../../components/ui/centredLayout";
import { useTranslation } from "react-i18next";
import { erpFeaturesCardProps } from "../../common/types";

import {
  BsCreditCard2Front,
  BsBoxes,
  BsCardChecklist,
  BsTruck,
} from "react-icons/bs";
import { RiTreasureMapLine } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import { GiSewingNeedle } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { SlWallet } from "react-icons/sl";
import { HiOutlineWrench } from "react-icons/hi2";
import { ImStatsBars } from "react-icons/im";
import { IconType } from "react-icons";
import { Helmet } from "react-helmet-async";
import DemoCallToAction from "../../components/shared/DemoCallToAction";
import SharedCard from "../../components/shared/SharedCard";

export default function ERPView() {
  const { t } = useTranslation();

  const featuresData: erpFeaturesCardProps[] = t("erp.features", {
    returnObjects: true,
  }) as erpFeaturesCardProps[];

  return (
    <section id="erp-section">
      <Helmet>
        <title>{t("helmetPagesDescription.erp.pageTitle")}</title>
        <meta
          name="description"
          content={t("helmetPagesDescription.erp.pageDescription")}
        />
      </Helmet>
      <CentredLayout>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col px-4 lg:px-0">
            {/* Title Description Column */}
            <div className="flex flex-col gap-8 my-8">
              <h1 className="custom-heading">{t("erp.sectionTitle")}</h1>
              <p className="custom-description">{t("erp.sectionSubtitle")}</p>
            </div>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 gap-">
              {featuresData.map(
                (element: erpFeaturesCardProps, index: number) => (
                  <FeatureCard key={index} element={element} />
                )
              )}
            </div>
          </div>
          <DemoCallToAction />
        </div>
      </CentredLayout>
    </section>
  );
}

function FeatureCard({ element }: Readonly<{ element: erpFeaturesCardProps }>) {
  const iconMap: { [key: string]: IconType } = {
    BsCreditCard2Front,
    BsBoxes,
    RiTreasureMapLine,
    AiOutlineSchedule,
    BsCardChecklist,
    GiSewingNeedle,
    IoDiamondOutline,
    BsTruck,
    SlWallet,
    HiOutlineWrench,
    ImStatsBars,
  };
  const IconComponent: IconType = iconMap[element.icon];
  return (
    <SharedCard>
      <div className="flex flex-col gap-10 p-8">
        <p className="font-bold text-center uppercase text-2xl text-[#1a1d1e80] group-hover:text-white dark:text-white ">
          {element.title}
        </p>
        <div className="flex flex-col items-center gap-8">
          <IconComponent
            size={40}
            className="opacity-50 group-hover:text-white group-hover:opacity-100"
          />

          <small className="text-center text-[#1a1d1e80] text-medium font-regular group-hover:text-white dark:text-white">
            {element.description}
          </small>
        </div>
        <ul className="pl-6 list-disc">
          {element.list.map((element: string, idx: number) => (
            <li
              key={idx}
              className=" text-[#161616] group-hover:text-white dark:text-white"
            >
              {element}
            </li>
          ))}
        </ul>
      </div>
    </SharedCard>
  );
}
