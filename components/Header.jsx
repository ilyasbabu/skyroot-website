"use client";

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"


const embassyAttestationMenus = [
    { name: "Embassy Attestation", link: "/embassy-attestation/embassy-attestation" },
    { name: "UAE Attestation", link: "/embassy-attestation/uae-attestation" },
    { name: "Saudi Attestation", link: "/embassy-attestation/saudi-attestation" },
    { name: "Qatar Attestation", link: "/embassy-attestation/qatar-attestation" },
    { name: "Malaysian Attestation", link: "/embassy-attestation/malaysia-attestation" },
    { name: "Kuwait Attestation", link: "/embassy-attestation/kuwait-attestation" },
    { name: "Bahrain Attestation", link: "/embassy-attestation/baharain-attestation" },
    { name: "Other Attestation", link: "/embassy-attestation/other-attestation" },
]

const attestaationMenus = [
    { name: "Certificates Attestation", link: "/attestation/certificates-attestation" },
    { name: "Apostle Attestation", link: "/attestation/apostle-attestation" },
    { name: "MEA Attestation", link: "/attestation/mea-attestation" },
    { name: "Marriage Certificate Attestation", link: "/attestation/marriage-certificate-attestation" },
    { name: "Birth Certificate Attestation", link: "/attestation/birth-certificate-attestation" },
    { name: "Norka Attestation", link: "/attestation/norka-attestation" },
    { name: "HRD Attestation", link: "/attestation/hrd-attestation" },
    { name: "Kerala HRD", link: "/attestation/kerala-hrd" },
    { name: "Home Dept.Attestation", link: "/attestation/home-dept-attestation" },
    { name: "Commercial Documents", link: "/attestation/commercial-documents" },
    { name: "Educational Documents", link: "/attestation/educational-documents" },
    { name: "Power of attorney", link: "/attestation/power-of-attorney" },
    { name: "SDM/ Chamber", link: "/attestation/sdm-chamber" },
]

const moreMenus = [
    { name: "UAE PCC", link: "/more/uae-pcc" },
    { name: "Oman PCC", link: "/more/oman-pcc" },
    { name: "PCC Attestation", link: "/more/pcc" },
    { name: "Visa Stamping", link: "/more/visa-stamping" },
    { name: "Translations", link: "/more/translations" },
    { name: "WES/IQAS Verification", link: "/more/wes-iqas-verification" },
    { name: "Notary", link: "/more/notary" },
]


const Header = () => {
    let [open, setOpen] = useState(false);
    let [mobileDropdownopen, setMobileDropdownopen] = useState({ "Embassy Attestation": false, "Attestation": false, "More": false });

    const closeMenu = ()=>{
        setOpen(false);
        setMobileDropdownopen({ "Embassy Attestation": false, "Attestation": false, "More": false });
    }

    const handleDropdowns = (name) => {
        let newDropdownState = { "Embassy Attestation": false, "Attestation": false, "More": false };
        if (name === "Embassy Attestation") {
            newDropdownState["Embassy Attestation"] = !mobileDropdownopen["Embassy Attestation"];
        } else if (name === "Attestation") {
            newDropdownState["Attestation"] = !mobileDropdownopen["Attestation"];
        } else if (name === "More") {
            newDropdownState["More"] = !mobileDropdownopen["More"];
        }
        setMobileDropdownopen(newDropdownState);
    }

    const Menu = ({ name, link }) => {
        return (
            <li className="flex items-center"><Link rel="noopener noreferrer" href={link} className="flex items-center px-4 text-black hover:text-blue-400">{name}</Link></li>
        )
    }

    const DropMenu = ({ name, links }) => {
        return (
            <li className="flex items-center">
                <div className="group relative cursor-pointer px-4">
                    <div className="flex items-center md:justify-between space-x-2">
                        <p className="menu-hover text-black hover:text-blue-400">{name}</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                className="h-5 w-5 group-hover:rotate-180 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                        </span>
                    </div>
                    <div className="invisible absolute z-50 flex w-56 flex-col bg-gray-50 py-1 px-1 text-gray-800 shadow-xl group-hover:visible">
                        {links.map((item) => (
                            <Link href={item.link} onClick={closeMenu} key={item.name} className="my-2 block py-1 text-gray-700 hover:text-blue-400 md:mx-2">{item.name}</Link>
                        ))}
                    </div>
                </div>
            </li>
        )
    }

    const MobileMenu = ({ name, link }) => {
        return (
            <li className="flex"><Link onClick={closeMenu} rel="noopener noreferrer" href={link} className="flex w-full items-center px-4 hover:text-blue-500">{name}</Link></li>
        )
    }

    const MobileDropMenu = ({ name, links }) => {
        return (
            <>
                <li className="flex" onClick={() => {
                    handleDropdowns(name)
                }}>
                    <p className={`flex items-center w-full px-4 hover:text-blue-500 ${mobileDropdownopen[name] ? "font-semibold" : ""}`}>{name}
                    </p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className={`h-5 w-5 mr-4 transition-all ${mobileDropdownopen[name] ? "rotate-180" : ""}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    </span>
                </li>
                {links.map((item) => (
                    <li key={item.name} className={`transition-all duration-500 ease-in-out ${mobileDropdownopen[name] ? "flex animate-slideIn" : "hidden animate-slideOut"}`}>
                        <Link onClick={closeMenu} rel="noopener noreferrer" href={item.link} className="flex items-center w-full px-4 hover:text-blue-500">{item.name}</Link>
                    </li>
                ))}
            </>
        )
    }

    return (
        <header className="p-4 fixed top-0 w-full bg-white z-10 shadow">
            <div className="container flex justify-between h-16 mx-auto bg-white md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <Menu name={"Home"} link={"/"} />
                    <Menu name={"About"} link={"/about"} />
                    <DropMenu name="Embassy Attestation"
                        links={embassyAttestationMenus}
                    />
                </ul>
                <Link rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center ">
                    <Image src={"/images/logo.png"} priority={true} width={100} height={100} alt="logo" className="" />
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <DropMenu name="Attestaion"
                        links={attestaationMenus}
                    />
                    <DropMenu name="More"
                        links={moreMenus}
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
            <ul className={`md:hidden absolute bg-white shadow w-full left-0 md:z-auto z-[-1] space-y-6 px-3 py-4 transition-all ease-in duration-300 ${open ? "top-20 opacity-100" : "top-[-400px] opacity-0"}`}>
                <MobileMenu name={"Home"} link={"/"} />
                <MobileMenu name={"About"} link={"/about"} />
                <MobileMenu name={"Contact"} link={"/contact"} />
                <MobileDropMenu name="Embassy Attestation"
                        links={embassyAttestationMenus}
                />
                <MobileDropMenu name="Attestation"
                    links={attestaationMenus}
                />
                <MobileDropMenu name="More"
                    links={moreMenus}
                />
            </ul>
        </header>
    )
}

export default Header