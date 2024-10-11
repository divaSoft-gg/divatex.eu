import { IHeroConfig } from "../../common/types"

export default function HeroSection({ data }: { data: IHeroConfig }) {

    return (
        <section
            className={`w-full   bg-cover flex justify-center items-center`}
            style={{
                backgroundImage: `url('${data.coverPath}')`,
                height: data.height ? data.height : 'inherit',
                minHeight: data.maxHeight

            }}        >
            <div className="flex items-center justify-center w-full h-full text-center text-white">
                <div className="font-primary">
                    {data.renderContent()}

                </div>
            </div>
        </section>
    )



}