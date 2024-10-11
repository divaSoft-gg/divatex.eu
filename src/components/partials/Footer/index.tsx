import { IHeroConfig } from "../../../common/types"
import HeroSection from "../../HeroSection"

export default function Footer() {
    const heroSectionParams: IHeroConfig = {
        coverPath: "/images/section_bg.jpg",
        maxHeight: '800px',
        height: '600px',

        renderContent: () => {
            return (

                <div className="max-w-[var(--max-content-width)] text-center">
                    <p className="font-light leading-snug text-center text-white font-primary text-7xl"><strong>La solution</strong> métier qui répond <br /> aux besoins de l’industrie textile</p>
                    <a href="/demo" className="bg-[#0E5EFF] text-white text-xl w-fit p-4 mt-16 block mx-auto rounded-2xl">Réserver une démo</a>
                </div>

            )


        }
    }
    return (
        <footer>
            <HeroSection data={heroSectionParams} />

            <footer className="py-4 bg-black">
                <div className="max-w-[var(--max-content-width)] mx-auto flex flex-row items-center justify-between font-primary text-white">
                    <img src="/images/logo_white.png" alt="logo-white" className="w-16" />
                    <p>Copyright &copy; {new Date().getFullYear()} – DivaTex </p>
                    <div></div>
                </div>
            </footer>
        </footer>
    )
}