import Image from "next/image";
export default function Nav() {
    return (
        <nav className="container flex flex-col justify-center items-center max-w-full bg-gray-100 p-4 h-40">
            <h1 className="text-3xl md:text:4xl lg:text-5xl">
                <Image className="" width={96} height={32.4} src="/logo_wildschool.png" alt="Wild Code School logo" />
                {' '}
                Les Argonautes
            </h1>
        </nav>

    )
}