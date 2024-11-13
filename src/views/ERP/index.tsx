import CentredLayout from "../../components/ui/centredLayout";
import { TiInputChecked } from "react-icons/ti";
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

export default function ERPView() {
  const { t } = useTranslation();

  const featuresData: erpFeaturesCardProps[] = t("erp.features", {
    returnObjects: true,
  }) as erpFeaturesCardProps[];

  return (
    <section id="erp-section">
      <CentredLayout>
        <div className="flex flex-col">
          {/* Title Description Column */}
          <div className="flex flex-col gap-8 py-20 ">
            <h1 className="text-6xl font-bold text-center text-black dark:text-white">
              DivaTex au coeur de votre perfomance
            </h1>
            <p className="text-lg text-left text-[#3C3D37] dark:text-white ">
              Maximisez l’efficacité et la rentabilité avec une solution ERP qui
              redéfinit la gestion textile. Découvrez ci-dessous les différents
              modules qui composent notre outil global.
            </p>
          </div>

          {/* Cards Columns */}
          <div className="grid erpGrid">
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
        "flex flex-col gap-10 p-8  bg-center bg-cover border group feature-card cursor-pointer ",
        hoveredIndex === index ? "hovered" : ""
      )}
      style={{
        backgroundImage:
          hoveredIndex === index ? `url(${element.backgroundImage})` : "none",
      }}
    >
      <p className="self-center font-semibold leading-6 text-2xl text-[#1a1d1e80] group-hover:text-white dark:text-white ">
        {element.title}
      </p>
      <div className="flex flex-col items-center gap-8">
        <IconComponent
          size={60}
          className="opacity-80 group-hover:text-white"
        />

        <small className="text-center text-[#1a1d1e80] text-medium font-semibold px-8 group-hover:text-white dark:text-white">
          {element.description}
        </small>
      </div>
      <ul className="flex flex-col gap-3 px-3 ">
        {element.list.map((element: string, idx: number) => (
          <li
            key={idx}
            className="flex flex-row items-center justify-start gap-1 "
          >
            <TiInputChecked size={20} />
            <p className="text-[#161616] text-lg text-left group-hover:text-white dark:text-white">
              {element}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
