import { Button, Image, Link } from "@nextui-org/react";
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
    <section id="hero-section" className="lg:max-h-[900px]">
      <CentredLayout>
        <div className="flex flex-row gap-8 px-0">
          <div>
            <Navbar />
            <div className="flex flex-col h-full gap-6 lg:gap-0 justify-evenly">
              <h1 className="px-4 custom-heading">{t("heroSection.title")}</h1>

              <div className="flex flex-col items-center gap-6 px-4 lg:items-start lg:px-0">
                <p className="custom-description">
                  {t("heroSection.paragraph")}
                </p>
                <div className="flex gap-3">
                  <Button as={Link} href="/erp" variant="flat">
                    {t("heroSection.moreButton")}
                  </Button>
                  <Button
                    as={Link}
                    href="/demo"
                    color="primary"
                    variant="solid"
                  >
                    {t("heroSection.demoButton")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:max-w-xl ">
            <Slider {...settings}>
              {swiperImages.map(
                (element: { src: string; alt: string }, index: number) => (
                  <div key={index}>
                    <Image
                      className="w-full bg-cover shadow-md h-fit rounded-2xl"
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
