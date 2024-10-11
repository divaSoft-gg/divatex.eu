import { Button, Link } from "@nextui-org/react"
import { IHeroConfig } from "../../../common/types"
import { scrollToTop } from "../../../common/utils"
import HeroSection from "../../HeroSection"

export default function Footer() {

    const heroSectionParams: IHeroConfig = {
        coverPath: "/images/section_bg.jpg",
        maxHeight: '800px',
        height: '600px',
        renderContent: () => (
            <div className="max-w-[var(--max-content-width)] text-center">
                <p className="font-light leading-snug text-center text-white font-primary text-7xl"><strong>La solution</strong> métier qui répond <br /> aux besoins de l’industrie textile</p>
                <Button href="/demo" onClick={() => { scrollToTop() }} as={Link} color="primary" className="text-white border-[#0E5EFF] mt-16" size="lg" variant="solid">Réserver une démo</Button>
            </div>
        )
    }

    return (
        <footer>
            <HeroSection data={heroSectionParams} />

            <footer className="py-4 bg-black">
                <div className="max-w-[var(--max-content-width)] mx-auto flex flex-row items-center justify-between font-primary text-white">
                    <img src="/images/logo_white.png" alt="logo-white" className="w-8" />
                    <small>Copyright &copy; {new Date().getFullYear()} – DivaTex </small>
                    <div></div>
                </div>
            </footer>
        </footer>
    )
}