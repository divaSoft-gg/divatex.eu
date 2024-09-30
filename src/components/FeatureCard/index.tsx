import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'

function index({ data }: any) {
    return (
        <Card className='w-ful group' shadow="sm" isPressable isBlurred isHoverable >
            <CardHeader className="flex flex-col items-end gap-3">
                <div className='block transition-all duration-300 opacity-40 group-hover:opacity-100 group-hover:scale-110'>
                    <Image
                        alt="feature logo"
                        radius="sm"
                        src={`/images/icons/${data.icon}.svg`}
                        height={40}
                        width={40}
                    />
                </div>
                <h1 className="w-full text-4xl font-semibold text-left text-black uppercase dark:text-white">{data.title}</h1>
            </CardHeader>

            <CardBody>
                <p className="my-4 text-lg text-gray-500 dark:text-white">{data.description}</p>
                <ul className="pl-4">
                    {data?.subFeatures?.map((sf: any) => {
                        return (
                            <li className="flex flex-row items-center gap-4 text-base font-medium" key={sf}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                                </svg>
                                {sf}
                            </li>
                        )
                    })}
                </ul>
            </CardBody>
        </Card>
    )
}

export default index