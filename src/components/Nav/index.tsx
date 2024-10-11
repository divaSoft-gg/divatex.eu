import { Link } from "react-router-dom";

export default function Nav() {
    const navItems = [
        {
            name: "Accueil",
            link: "/"
        },
        {
            name: "ERP",
            link: "/erp"
        },
        {
            name: "A propos",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        },
        {
            name: "Réserver une démo",
            link: "/demo"
        }
    ];

    return (
        <nav className="max-w-[var(--max-content-width)] mx-auto pt-4 flex flex-row justify-between items-center">
            <img src="/images/logo_white.png" alt="logo-white" className="w-24" />

            <ul className="flex flex-row items-center gap-8 text-white">
                {
                    navItems.map((item, index) => {
                        return (
                            <li key={index} className="link hover:text-[#0E5EFF]">
                                <Link to={item.link} className="link">{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav >
    )
}