import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"

export default function ContactCard({
    location,
    addresse,
    email,
    phone
}: {
    id: number,
    location: string,
    addresse: string,
    email: string,
    phone: string
}) {
    return (
        <Card shadow="sm" isBlurred isPressable className="max-w-xs">
            <CardHeader className="flex gap-3">
                <p className="text-2xl font-semibold uppercase">{location}</p>
            </CardHeader>

            <Divider />

            <CardBody className="flex flex-col gap-4">
                <p>{addresse}</p>
                <a href={`mailto:${email}`} className="text-[#0E5EFF] w-full">{email}</a>
                <a href={`tel:${phone}`} className="w-fit  text-[#0E5EFF] rounded-xl py-2 px-4 border border-[#0E5EFF] hover:bg-[#0E5EFF] hover:text-white transition-all duration-300">{phone}</a>
            </CardBody>
        </Card>
    )
}