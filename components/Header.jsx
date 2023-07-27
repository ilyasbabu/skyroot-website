"use client";

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"


const DropMenu = ({ name, links }) => {
    return (
        <li className="flex items-center">
            <div className="group relative cursor-pointer px-4">
                <div className="flex items-center md:justify-between space-x-2">
                    <p className="menu-hover hover:text-blue-400">{name}</p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className="h-5 w-5 group-hover:rotate-180 transition-all">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    </span>
                </div>
                <div className="invisible absolute z-50 flex w-56 flex-col bg-gray-50 py-1 px-1 text-gray-800 shadow-xl group-hover:visible">
                    {links.map((item) => (
                        <Link href={item.link} key={item.name} className="my-2 block py-1 text-gray-700 hover:text-blue-400 md:mx-2">{item.name}</Link>
                    ))}
                </div>
            </div>
        </li>
    )
}

const Menu = ({ name, link }) => {
    return (
        <li className="flex"><Link rel="noopener noreferrer" href={link} className="flex items-center px-4 -mb-1 hover:text-blue-400">{name}</Link></li>
    )
}

const MobileMenu = ({ name, link }) => {
    return (
        <li className="flex"><Link rel="noopener noreferrer" href={link} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">{name}</Link></li>
    )
}

const MobileDropMenu = () => {
    return (
        <li>
            <div className="group relative cursor-pointer px-4 -mb-1">
                <div className="flex items-center md:justify-between space-x-3 ">
                    <a className="menu-hover  ">
                        {"link.name"}
                    </a>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className="h-5 w-5 group-hover:rotate-180 transition-all">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    </span>
                </div>
                <div
                    className="invisible absolute z-50 flex w-full flex-col bg-white py-1 px-1 shadow-xl group-hover:visible">
                    <Link href={"item.link"} key={"item.name"} className="my-2 block  py-1 hover:text-blue-400 md:mx-2"
                    >{"item.name"}</Link>
                    <Link href={"item.link"} key={"item.name"} className="my-2 block  py-1 hover:text-blue-400 md:mx-2"
                    >{"item.name"}</Link>
                    <Link href={"item.link"} key={"item.name"} className="my-2 block  py-1 hover:text-blue-400 md:mx-2"
                    >{"item.name"}</Link>
                    <Link href={"item.link"} key={"item.name"} className="my-2 block  py-1 hover:text-blue-400 md:mx-2"
                    >{"item.name"}</Link>
                </div>
            </div>
        </li>
    )
}

const Header = () => {
    let [open, setOpen] = useState(false);
    return (
        <header className="p-4 fixed top-0 w-full bg-white z-10 shadow">
            <div className="container flex justify-between h-16 mx-auto bg-white md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <Menu name={"Home"} link={"/"} />
                    <Menu name={"About"} link={"/about"} />
                    <DropMenu name="Embassy Attestaion"
                        links={[
                            { name: "Name1", link: "/link" },
                            { name: "Name2", link: "/link" },
                            { name: "Name3 Attestation", link: "/link" },
                        ]}
                    />
                </ul>
                <Link rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <Image src={"/images/logo.png"} width={100} height={100} alt="logo" />
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <DropMenu name="Attestaion"
                        links={[
                            { name: "Name1 Attestaion", link: "/link" },
                            { name: "Name2 Attestaion", link: "/link" },
                            { name: "Name3 Attestaion", link: "/link" },
                        ]}
                    />
                    <DropMenu name="More"
                        links={[
                            { name: "Name1 More", link: "/link" },
                            { name: "Name2 More", link: "/link" },
                            { name: "Name3 More", link: "/link" },
                        ]}
                    />
                    <Menu name={"Contact"} link={"/contact"} />
                </ul>
                <button title="Button" type="button" onClick={() => (setOpen(!open))} className="p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 transition ${open ? "rotate-90" : ""} `}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={`${open ? "M4 6L18 18M4 18L18 6" : "M4 6h16M4 12h16M4 18h16"} `}></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <ul className={`md:hidden absolute bg-white w-full left-0 md:z-auto z-[-1] space-y-6 px-3 py-4 transition-all ease-in duration-200 ${open ? "top-20 opacity-100" : "top-[-300px] opacity-0"}`}>
                <MobileMenu name={"Home"} link={"/"} />
                <MobileMenu name={"About"} link={"/about"} />
                <MobileMenu name={"Contact"} link={"/contact"} />
                <MobileDropMenu name="Attestation"
                    links={[
                        { name: "Name1 Attestation", link: "/link" },
                        { name: "Name2 Attestation", link: "/link" },
                        { name: "Name3 Attestation", link: "/link" },
                    ]}
                />
                <MobileDropMenu name="Embassy Attestation"
                    links={[
                        { name: "Name1 Embassy Attestation", link: "/link" },
                        { name: "Name2 Embassy Attestation", link: "/link" },
                        { name: "Name3 Embassy Attestation", link: "/link" },
                    ]}
                />
                <MobileDropMenu name="More"
                    links={[
                        { name: "Name1 More", link: "/link" },
                        { name: "Name2 More", link: "/link" },
                        { name: "Name3 More", link: "/link" },
                    ]}
                />
            </ul>
        </header>
    )
}

export default Header