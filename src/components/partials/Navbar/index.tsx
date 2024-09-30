import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Image } from "@nextui-org/react";
import { NAV } from '../../../common/data';

export default function NavBar() {


    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className='dark'>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image src='images/logo_white.png' width={50} />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden gap-4 sm:flex" justify="center">
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