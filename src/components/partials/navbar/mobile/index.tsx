import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { NavbarItemsProps } from "../../../../common/types";
import ThemeToggler from "../../../shared/themeToggler";
import { useReducer } from "react";
import { scrollToTop } from "../../../../common/utils";

export default function MobileNavbar({
  navbarItems,
}: Readonly<{ navbarItems: NavbarItemsProps[] }>) {
  const [isMenuOpen, setIsMenuOpen] = useReducer(
    (current: boolean) => !current,
    false
  );

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      position="sticky"
      maxWidth="full"
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <img
            src="https://i.imgur.com/iqq372D.png"
            className="w-16 invert dark:invert-0"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <ThemeToggler />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu className="mt-14">
        {navbarItems.map((item: NavbarItemsProps, index: number) => (
          <NavbarMenuItem key={`${index}`}>
            <Link
              color="foreground"
              href={item.link}
              onClick={() => {
                scrollToTop();
                setIsMenuOpen();
              }}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
