import { InlineWidget } from 'react-calendly'

export default function Demo() {
    return (
        <div className='my-12'>
            <InlineWidget url="https://calendly.com/rochdi-ktir" styles={{ height: 700 }} />
        </div>
    )
}