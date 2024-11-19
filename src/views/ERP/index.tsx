import CentredLayout from "../../components/ui/centredLayout";
import { useTranslation } from "react-i18next";
import { erpFeaturesCardProps } from "../../common/types";
import { useState } from "react";
import { cn } from "../../common/utils";
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
      </Helmet>{" "}
      <CentredLayout>
        <div className="flex flex-col px-4 lg:px-0">
          {/* Title Description Column */}
          <div className="flex flex-col gap-8 my-8">
            <h1 className="text-3xl font-bold text-left text-black lg:text-6xl dark:text-white">
              {t("erp.sectionTitle")}
            </h1>
            <p className="text-base lg:text-lg text-left text-[#3C3D37] dark:text-white ">
              {t("erp.sectionSubtitle")}
            </p>
          </div>

          {/* Cards Columns */}
          <div className="grid lg:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
            {featuresData.map(
              (element: erpFeaturesCardProps, index: number) => (
                <FeatureCard key={index} element={element} index={index} />
              )
            )}
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}

function FeatureCard({
  element,
  index,
}: Readonly<{ element: erpFeaturesCardProps; index: number }>) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <div
      role="presentation"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      key={index}
      className={cn(
        "flex flex-col gap-10 p-8  bg-center bg-cover border group feature-card cursor-pointer",
        hoveredIndex === index ? "hovered" : ""
      )}
      style={{
        backgroundImage:
          hoveredIndex === index ? `url(${element.backgroundImage})` : "none",
      }}
    >
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
  );
}
