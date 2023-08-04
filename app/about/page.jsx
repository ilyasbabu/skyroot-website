import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="bg-gray-100 text-gray-800">
                <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">About Us</h2>
                        <p className="mt-4 text-lg text-gray-600">To get your certificate faster , we provide the most fastest route for attestation</p>
                    </div>
                    <div className="p-4 lg:p-8 bg-gray-100 text-gray-800">
                        <div className="container mx-auto space-y-12">
                            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                                <Image src={"/images/about.jpg"} height={500} width={500} alt="About" className="h-80 bg-gray-500 object-cover aspect-video" />
                                <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                                    <p className="my-6 text-gray-600">Skyroots provide assured administrative assistance and service for genuine attestation of your valuable documents with safe handling and prompt delivery.</p>
                                    <p className="my-6 text-gray-600">At skyroots our primary target is to provide reliable and professional service on par with the international standards at affordable and competative rates. We currently provide assistance with Embassy attestation HRD,MEA etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                        {
                            [
                                {
                                    name: "24X7 Support",
                                    description: "We are providing 24X7 Customer support for our clients."
                                },
                                {
                                    name: "Express Service",
                                    description: "To get your certificate faster , we provide the most fastest route for attestation."
                                },
                                {
                                    name: "Affordable Cost",
                                    description: "We offer you the best service along with affordable rate compared to all the other attestation agency"
                                },
                                {
                                    name: "Tacking Facility",
                                    description: "Each document will reach its destination safely and on time."
                                }
                            ].map((item) => (
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-sky-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <div className="ml-3">
                                        <dt className="text-lg font-medium">{item.name}</dt>
                                        <dd className="mt-2 text-gray-600">{item.description}</dd>
                                    </div>
                                </div>
                            ))
                        }
                    </dl>
                </div>
            </div>
        </>
    )
}

export default page