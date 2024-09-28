import { Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { NAV } from '../../../common/data'

export default function NavBar() {
    return (
        <Navbar>
            <NavbarBrand>
                <Image src='https://avatars.githubusercontent.com/u/115502126?s=200&v=4' width={50} />
            </NavbarBrand>

            <NavbarContent className="hidden gap-4 sm:flex" justify="center">
                {
                    NAV.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link color="foreground" href={item.route}>{item.label}</Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>
        </Navbar>
    )
}