import { Button } from "@nextui-org/react";

export default function Home() {


    return (
        <div className="flex flex-col items-center justify-center h-4/5">
            <section className="dark max-w-[var(--max-content-width)] mx-auto flex flex-col gap-8">
                <h1 className="text-6xl font-semibold tracking-tight text-left text-black dark:text-white">
                    Plan. Develop. Ship.
                </h1>
                <h3>Crafted with precision, delivered with speed</h3>
                <p className="text-lg font-light text-left text-gray-300 max-w-[800px]">
                    We're committed to turning your ideas into reality. Our streamlined process ensures that every project is executed with precision and delivered on time. From initial planning to final deployment, we're dedicated to providing exceptional results.
                </p>

                <Button variant="solid" color="default" radius="lg" size="lg" className="w-fit">Contact Us</Button>
            </section>
        </div>
    )
}