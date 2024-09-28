import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Image } from "@nextui-org/react";
import { NAV } from '../../../common/data';

export default function NavBar() {


    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image src='images/logo_white.png' width={50} />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    NAV.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link color="foreground" href={item.link}>{item.label}</Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>


            {/* MOBILE LAYOUT */}
            <NavbarMenu>
                {NAV.map((item, index) => (
                    <NavbarMenuItem key={`${index}`}>
                        <Link color="foreground" href={item.link}>{item.label}</Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}