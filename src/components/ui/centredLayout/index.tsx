import { ReactNode } from "react"

export default function CenteredLayout({ children }: { children: ReactNode }) {
    return (
        <div className="max-w-[var(--max-content-width)] mx-auto">
            {children}
        </div>
    )
}