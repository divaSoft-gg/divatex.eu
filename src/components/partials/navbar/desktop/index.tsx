import { Link } from "@nextui-org/react";
import { NavbarItemsProps } from "../../../../common/types";
import CentredLayout from "../../../ui/centredLayout";
import ThemeToggler from "../../../shared/themeToggler";
import { scrollToTop } from "../../../../common/utils";

export default function DesktopNavbar({
  navbarItems,
}: Readonly<{ navbarItems: NavbarItemsProps[] }>) {
  return (
    <div className="sticky top-0 z-50 w-full px-4 bg-white rounded-full backdrop-blur-md dark:bg-transparent">
      <CentredLayout>
        <nav className="flex flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="/">
              <img
                src="https://i.imgur.com/iqq372D.png"
                className="w-16 invert dark:invert-0"
                alt="divatex logo"
              />
            </Link>

            <ul className="flex-row items-center hidden gap-4 lg:flex">
              {navbarItems.map((element, index) => (
                <li key={index}>
                  <Link
                    className="block font-normal text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-gray-400 "
                    href={element.link}
                    onClick={() => scrollToTop()}
                  >
                    {element.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start justify-start ">
            <ThemeToggler />
          </div>
        </nav>
      </CentredLayout>
    </div>
  );
}
