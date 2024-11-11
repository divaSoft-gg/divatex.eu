import { Button } from "@nextui-org/react";
import Navbar from "../partials/navbar";
import CentredLayout from "../ui/centredLayout";

import Slider from "react-slick";
import { swiperImages } from "../../common/data";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };
  return (
    <section id="hero-section">
      <CentredLayout>
        <div className="flex flex-row gap-12">
          <div className="flex flex-col gap-3">
            <Navbar />
            <div className="flex flex-col justify-between h-full">
              <h1 className="text-6xl font-bold">{t("heroSection.title")}</h1>
              <p className="text-sm text-gray-800 dark:text-white">
                {t("heroSection.paragraph")}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Button> {t("heroSection.moreButton")}</Button>
              <Button variant="bordered"> {t("heroSection.demoButton")}</Button>
            </div>
          </div>

          <div className="max-w-[500px]">
            <Slider {...settings}>
              {swiperImages.map(
                (element: { src: string; alt: string }, index: number) => (
                  <div key={index}>
                    <img
                      className="shadow-md rounded-2xl"
                      src={element.src}
                      alt={element.alt}
                    />
                  </div>
                )
              )}
            </Slider>
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}
