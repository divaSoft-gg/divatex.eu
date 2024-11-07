import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Image } from "@nextui-org/react";
import { NAV } from '../../../common/data';
import { scrollToTop } from '../../../common/utils';


export default function NavBar() {


    const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className='dark' position="sticky" >
            <NavbarContent justify='start' >
                <NavbarBrand>
                    <Image src='images/logo_white.png' width={50} />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify='end'>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />

            </NavbarContent>

            <div
                className='relative justify-end hidden bg-yellow-400 lg:bg-red-500 lg:flex lg:w-82 lg:gap-4'
            // className={`${isMobile ? 'hidden' : 'flex'} gap-4`}
            >
                {
                    NAV.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link color="foreground" onClick={() => { scrollToTop() }} href={item.link}>{item.label}</Link>
                        </NavbarItem>
                    ))
                }
            </div>


            {/* MOBILE LAYOUT */}
            <NavbarMenu>
                {NAV.map((item, index) => (
                    <NavbarMenuItem key={`${index}`}>
                        <Link color="foreground" href={item.link} onClick={() => { scrollToTop(); setIsMenuOpen() }}>{item.label}</Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}