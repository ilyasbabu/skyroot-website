import Image from "next/image"
import Link from "next/link"
const Footer = () => {
    return (
        <>
            <footer className="px-4 py-8 bg-gray-100 text-gray-600">
                <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12">
                            <Image src={"/images/logo2.png"} alt="logo" height={100} width={100} />
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li>
                            <Link href="/">Instagram</Link>
                        </li>
                        <li>
                            <Link href="/">Facebook</Link>
                        </li>
                        <li>
                            <Link href="/">Twitter</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-center pt-10 md:pt-1 text-xs">
                    <span className="text-gray-600">© Copyright {new Date().getFullYear()}. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}

export default Footer