import { Link } from "react-router-dom";
import { IHeroConfig } from "../../common/types";

export default function HeroSection({ config }: { config: IHeroConfig }) {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-32 sm:py-36 lg:py-40 overflow-hidden h-[100dvh] min-h-max flex items-center relative">
            <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-primary-600/70
backdrop-filter blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-primary-600/70
backdrop-filter blur-3xl opacity-50" />
            <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-primary-400/5 right-0
-translate-y-[40%] translate-x-[40%] top-0">
                <div className="inset-[10%] rounded-full bg-gradient-to-l from-primary-400/20">
                    <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-primary-400/30" />
                </div>
            </div>
            <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-primary-400/5 left-0
translate-y-[40%] -translate-x-[40%] bottom-0">
                <div className="inset-[10%] rounded-full bg-gradient-to-r from-primary-400/40">
                    <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-primary-400/50" />
                </div>
            </div>


            <div className="w-full px-5 mx-auto lg:max-w-7xl sm:px-10 md:px-12 lg:px-5">
                <div className="flex flex-col items-center space-y-10 text-center">
                    <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl text-primary-600 dark:text-white">{config.slug}</h3>
                    <h1 className="max-w-4xl text-4xl font-bold text-gray-900 capitalize md:text-5xl lg:text-6xl/tight xl:text-7xl/tight dark:text-white">
                        {config.title}
                    </h1>

                    <p className="max-w-xl my-0 text-base text-center text-gray-700 dark:text-gray-300">
                        {config.description}
                    </p>

                    {
                        config.button.text !== '' &&
                        <div className="flex justify-center">
                            <Link to={config.button.link} className="bg-[#0E5EFF] px-8 py-4 text-white text-xl w-fit p-4 rounded-3xl">{config.button.text}</Link>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}