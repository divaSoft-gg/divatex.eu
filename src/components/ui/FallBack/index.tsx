import { Spinner } from '@nextui-org/react'

export default function FallBackElement() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <Spinner />
        </div>
    )
}