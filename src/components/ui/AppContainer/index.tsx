import React, { useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import { cn } from '../../../common/utils'
import Footer from '../../partials/Footer'
import NavBar from '../../partials/Navbar'
import FallBackElement from '../FallBack'

export function AppContainer({ className = '' }) {
    const navigate = useNavigate()
    const ref: any = useRef()

    return (
        <NextUIProvider navigate={navigate}>
            <div className={cn('w-full bg-white', className)} ref={ref}>

                <NavBar />

                <React.Suspense fallback={<FallBackElement />}>

                    <Outlet />

                </React.Suspense>

                <Footer />

            </div>
        </NextUIProvider >
    )
}
