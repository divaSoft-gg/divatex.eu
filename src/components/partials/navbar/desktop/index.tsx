import { Link } from "@nextui-org/react";
import { NavbarItemsProps } from "../../../../common/types";
import CentredLayout from "../../../ui/centredLayout";
import ThemeToggler from "../../../shared/themeToggler";

export default function DesktopNavbar({
  navbarItems,
}: Readonly<{ navbarItems: NavbarItemsProps[] }>) {
  return (
    <div className="sticky top-0 z-50 w-full bg-white">
      <CentredLayout>
        <nav className="flex flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="/">
              <img
                src="https://i.imgur.com/iqq372D.png"
                className="w-16 invert"
              />
            </Link>

            <ul className="flex-row items-center hidden gap-6 lg:flex">
              {navbarItems.map((element, index) => (
                <li key={index}>
                  <Link
                    className="block font-normal text-gray-900 hover:text-blue-700"
                    href={element.link}
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
