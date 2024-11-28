import { Button, Link } from "@nextui-org/react";
import { NavbarItemsProps } from "../../../../common/types";
import CentredLayout from "../../../ui/centredLayout";
import ThemeToggler from "../../../shared/themeToggler";
import { scrollToTop } from "../../../../common/utils";
import { useTranslation } from "react-i18next";

export default function DesktopNavbar({
  navbarItems,
}: Readonly<{ navbarItems: NavbarItemsProps[] }>) {
  const { t } = useTranslation();
  return (
    <div className="sticky top-0 z-50 w-full pt-6 bg-white rounded-full backdrop-blur-md dark:bg-transparent">
      <CentredLayout>
        <nav className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              className="border-0"
              data-hover={false}
              as={Link}
              href="/"
            >
              <img
                src="https://i.imgur.com/iqq372D.png"
                className="w-16 invert dark:invert-0"
                alt="divatex logo"
              />
            </Button>

            <ul className="flex flex-row gap-4">
              {navbarItems.map((element, index) => (
                <li key={index}>
                  <Link
                    className="font-normal text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-gray-400"
                    href={element.link}
                    onClick={() => scrollToTop()}
                  >
                    {element.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3 ">
            <Button
              as={Link}
              href={t("navbar.demoButton.link")}
              variant="bordered"
              color="primary"
            >
              {t("navbar.demoButton.label")}
            </Button>
            <ThemeToggler />
          </div>
        </nav>
      </CentredLayout>
    </div>
  );
}
