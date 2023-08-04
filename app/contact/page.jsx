import Map from '@/components/Map'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <section className="bg-gray-100 text-gray-800">
                <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
                    <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
                            <div className="text-gray-600">Should you have any questions regarding our service, do not hesitate to reach out.</div>
                        </div>
                        <Image width={500} height={500} src={"/images/contact.jpg"} alt="Contact" className="p-6 w-full mix-blend-multiply" />
                    </div>
                    <form className="flex flex-col justify-center">
                        <div>
                            <label htmlFor="name" className="text-sm">Full name</label>
                            <input id="name" type="text" placeholder="" className="w-full border-2 p-3 rounded bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" className="w-full border-2 p-3 rounded bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm">Message</label>
                            <textarea id="message" rows="3" className="w-full border-2 p-3 rounded bg-gray-100"></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-sky-600 text-gray-50">Send Message</button>
                    </form>
                </div>
            </section>

            <section className="bg-gray-50 text-gray-800">
                <div className="container flex flex-col md:flex-row px-4 md:px-0 items-center justify-center mx-auto  ">
                    {
                        [
                            {
                                text: <p>Skyroots Attestations No.CC 40/8942,(D-18), Jacob&apos; DD Mall, MG Road Opp: Centre Square Mall, Kochi, Kerala 682035</p>,
                                phone: "0484 485 9555, +91 9567397477",
                                mail: "contact@skyroots.co.in",
                            },
                            {
                                text: <p>Skyroots attestations First floor, FCC building, Mavoor Road,<br />Calicut-673016</p>,
                                phone: "+91 9567397433",
                                mail: "contact@skyroots.co.in",
                            },
                            {
                                text: <p>Skyroots Attestation, 91 Hari Nagar, 1st floor, Ashram, Mathura road <br />New Delhi, 110014</p>,
                                phone: "+91 9567397477",
                                mail: "contact@skyroots.co.in",
                            },
                        ].map((item,index) => (
                            <div key={index} className="flex flex-col w-full mx-4 my-2 md:my-6 shadow-lg">
                                <div className="flex flex-col items-start p-8 rounded-lg bg-white text-gray-500">
                                    <div className='flex'>
                                        <div className='p-1'>
                                            <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path fill="#000000" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"></path></svg>
                                        </div>
                                        <div>{item.text}</div>
                                    </div>
                                    <div className='flex'>
                                        <div className='p-1'>
                                            <svg width="1em" height="1em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M478.94 370.14c-5.22-5.56-23.65-22-57.53-43.75c-34.13-21.94-59.3-35.62-66.52-38.81a3.83 3.83 0 0 0-3.92.49c-11.63 9.07-31.21 25.73-32.26 26.63c-6.78 5.81-6.78 5.81-12.33 4c-9.76-3.2-40.08-19.3-66.5-45.78s-43.35-57.55-46.55-67.3c-1.83-5.56-1.83-5.56 4-12.34c.9-1.05 17.57-20.63 26.64-32.25a3.83 3.83 0 0 0 .49-3.92c-3.19-7.23-16.87-32.39-38.81-66.52c-21.78-33.87-38.2-52.3-43.76-57.52a3.9 3.9 0 0 0-3.89-.87a322.35 322.35 0 0 0-56 25.45A338 338 0 0 0 33.35 92a3.83 3.83 0 0 0-1.26 3.74c2.09 9.74 12.08 50.4 43.08 106.72c31.63 57.48 53.55 86.93 100 133.22S252 405.21 309.54 436.84c56.32 31 97 41 106.72 43.07a3.86 3.86 0 0 0 3.75-1.26A337.73 337.73 0 0 0 454.35 430a322.7 322.7 0 0 0 25.45-56a3.9 3.9 0 0 0-.86-3.86Z"></path></svg>
                                        </div>
                                        <div><p>{item.phone}</p></div>
                                    </div>
                                    <div className='flex'>
                                        <div className='p-1'>
                                            <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path fill="#000000" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"></path></svg>
                                        </div>
                                        <div><p>{item.mail}</p></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <Map/>
        </>
    )
}

export default page