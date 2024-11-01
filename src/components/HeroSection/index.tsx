import { IHeroConfig } from "../../common/types";

export default function HeroSection({ data }: { data: IHeroConfig }) {


    return (
        <section
            className={`px-10 py-5 flex justify-center items-center  bg-cover bg-center `}
            style={{
                backgroundImage: `url('${data.coverPath}')`,
                backgroundRepeat: 'no-repeat',

                height: data.height ? data.height : 'inherit',
                minHeight: data.maxHeight,

            }}
        >
            <div className="flex items-center justify-center text-white">
                <div className="font-primary">
                    {data.renderContent()}
                </div>
            </div>

        </section>
    );
}
