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
    <section id="hero-section" className="h-screen overflow-hidden">
      <CentredLayout>
        <div className="flex flex-row gap-8">
          <div>
            <Navbar />
            <div className="flex flex-col h-full justify-evenly">
              <h1 className="text-6xl font-bold leading-tight">
                {t("heroSection.title")}
              </h1>

              <div className="flex flex-col gap-6">
                <p className="text-sm font-light text-gray-800 dark:text-white">
                  {t("heroSection.paragraph")}
                </p>
                <div className="flex gap-3">
                  <Button color="default">{t("heroSection.moreButton")}</Button>
                  <Button color="default" variant="bordered">
                    {t("heroSection.demoButton")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[600px]">
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
