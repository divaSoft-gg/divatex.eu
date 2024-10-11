import { IHeroConfig } from "../../common/types"

export default function HeroSection({ data }: { data: IHeroConfig }) {

    return (
        <section
            className={`w-full min-h-[${data.maxHeight}] bg-[url('${data.coverPath}')] ${data.height && `h-[${data.height}]`}  bg-cover flex justify-center items-center`}

        >
            <div className="flex items-center justify-center w-full h-full text-center text-white">
                <div className="font-primary">
                    {data.renderContent()}

                </div>
            </div>
        </section>
    )



}