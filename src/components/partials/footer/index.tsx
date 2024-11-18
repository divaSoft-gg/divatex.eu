import { useTranslation } from "react-i18next";
import CenteredLayout from "../../ui/centredLayout";
import ThemeToggler from "../../shared/themeToggler";
import { Link } from "@nextui-org/react";
import { getCurrentYear } from "../../../common/utils";
import { FooterItems, NavbarItemsProps } from "../../../common/types";

export default function Footer() {
  const { t } = useTranslation();
  const footerSiteMap: FooterItems[] = t("footer.siteMap", {
    returnObjects: true,
  }) as FooterItems[];

  return (
    <footer className="dark:bg-[#161616] bg-black py-8 mt-[393.2px] lg:mt-[301.2px]">
      <CenteredLayout>
        <div className="flex flex-col justify-between w-full lg:flex-row">
          <div className="max-w-full items-start lg:max-w-[40%] flex flex-col gap-4 ">
            <img src="https://i.imgur.com/iqq372D.png" className="w-16 " />{" "}
            <p className="text-sm text-gray-300 hover:text-gray-100">
              {t("footer.description")}
            </p>
            <ThemeToggler />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 pt-10 lg:justify-around lg:flex-row lg:pt-0">
            {footerSiteMap.map((element: FooterItems, index: number) => (
              <div key={index}>
                <h1 className="text-lg font-semibold text-white">
                  {element.title}
                </h1>

                <ul className="mt-4 list-none">
                  {element.sections.map(
                    (item: NavbarItemsProps, index: number) => (
                      <li key={index}>
                        <Link
                          href={item.link}
                          className="text-gray-300 hover:text-gray-100"
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </CenteredLayout>
      <p className="flex items-center justify-center w-full h-full text-white">
        {" "}
        &copy; {getCurrentYear()} {t("footer.copyright")}{" "}
      </p>
    </footer>
  );
}
