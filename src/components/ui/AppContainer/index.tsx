import React, { useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import { cn } from '../../../common/utils'
import Footer from '../../partials/Footer'
import NavBar from '../../partials/Navbar'
import FallBackElement from '../FallBack'
import { DivaGeneralNavbar } from '@aymen_diva/diva-shared-navbar'
import '@aymen_diva/diva-shared-navbar/dist/index.css'
export function AppContainer({ className = '' }) {
    const navigate = useNavigate()
    const ref: any = useRef()

    return (
        <NextUIProvider navigate={navigate}>
            <div className={cn('w-full bg-white', className)} ref={ref}>
                <DivaGeneralNavbar />

                <NavBar />

                <React.Suspense fallback={<FallBackElement />}>

                    <Outlet />

                </React.Suspense>

                <Footer />

            </div>
        </NextUIProvider >
    )
}
