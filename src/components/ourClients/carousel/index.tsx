import { cn, shuffleArray } from "../../../common/utils";
import { IClient } from "../../../common/types";
import { Tooltip } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import CardDetils from "../../shared/ourClientCard";
import { useTheme } from "../../../hooks/useTheme";

export default function AutoplayCarousel({
  directionClass,
  elementIndex,
  invert = false,
}: Readonly<{
  directionClass: string;
  elementIndex: number;
  invert: boolean;
}>) {
  const { t } = useTranslation();
  const clients: IClient[] =
    elementIndex === 0
      ? (t("ourClients.clientsDetails", { returnObjects: true }) as IClient[])
      : shuffleArray(
          t("ourClients.clientsDetails", { returnObjects: true }) as IClient[]
        );

  return (
    <div className="relative w-full h-16 overflow-hidden">
      <div
        role="presentation"
        className={cn(
          "absolute flex items-center justify-center h-full gap-3 w-[200%]",
          directionClass
        )}
        onMouseEnter={(e) => e.currentTarget.classList.add("pause")}
        onMouseLeave={(e) => e.currentTarget.classList.remove("pause")}
      >
        {clients.map((detail, index) => (
          <CarouselItem
            invert={invert}
            key={index}
            imgUrl={detail.logo}
            imgTitle={detail.name}
            description={detail.description}
            websiteLink={detail.websiteLink}
          />
        ))}
        {clients.map((detail, index) => (
          <CarouselItem
            invert={invert}
            key={`${index}-clone`}
            imgUrl={detail.logo}
            imgTitle={detail.name}
            description={detail.description}
            websiteLink={detail.websiteLink}
          />
        ))}
      </div>
    </div>
  );
}

function CarouselItem({
  imgUrl,
  imgTitle,
  description,
  websiteLink,
  invert = false,
}: Readonly<{
  imgTitle: string;
  imgUrl: string;
  description: string;
  websiteLink: string;
  invert: boolean;
}>) {
  const theme = useTheme();
  return (
    <div className="flex items-center justify-center w-full h-full transition-transform transform hover:scale-90 hover:shadow-lg shadow-gray-200">
      <Tooltip
        showArrow
        placement="bottom"
        content={
          <CardDetils
            imgTitle={imgTitle}
            imgUrl={imgUrl}
            description={description}
            websiteLink={websiteLink}
          />
        }
      >
        <img
          className={cn(
            "",
            invert && theme.theme === "light" && "invert",
            invert ? "w-[120px]" : "w-4/5 h-4/5"
          )}
          src={imgUrl}
          alt={imgTitle}
        />
      </Tooltip>
    </div>
  );
}
