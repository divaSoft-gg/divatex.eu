import { useTranslation } from "react-i18next";
import { NavbarItemsProps } from "../../../common/types";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./mobile";
import DesktopNavbar from "./desktop";

export default function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { t } = useTranslation();
  const navbarItems: NavbarItemsProps[] = t("navbar.items", {
    returnObjects: true,
  }) as NavbarItemsProps[];

  return isMobile ? (
    <MobileNavbar navbarItems={navbarItems} />
  ) : (
    <DesktopNavbar navbarItems={navbarItems} />
  );
}
