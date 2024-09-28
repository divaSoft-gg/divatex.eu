
export default function Footer() {
    return (
        <footer className="absolute bottom-4 right-4">
            <p>
                Copyright {new Date().getFullYear()}{" "}
                <a
                    href="https://aymkh.tn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @AymKH
                </a>
            </p>
        </footer>
    )
}