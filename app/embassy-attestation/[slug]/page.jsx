import { embassyAttestationContent } from '@/app/contents'
import { notFound } from 'next/navigation'

export async function generateMetadata({params}){
    const data = embassyAttestationContent.find(item => item.slug === params.slug)
    return {
        title: data.title,
        description: data.description,
        alternates:{
            canonical:"/embassy-attestation/"+params.slug
        },
    }
}

const page = (props) => {
    const slug = props.params.slug
    const data = embassyAttestationContent.find(item => item.slug === slug)
    if (!data) {
        notFound()
    }
    return (
        <section className='p-5 min-h-[80vh] md:mx-36 lg:mx-56'>
            <nav aria-label="breadcrumb" className="w-full text-xs text-gray-800">
                <ol className="flex h-8 space-x-2 text-gray-800">
                    <li className="flex items-center">
                        <a rel="noopener noreferrer" href="#" title="Back to homepage" className="flex items-center hover:underline">Home</a>
                    </li>
                    <li className="flex items-center space-x-1">
                        <span className="text-gray-600">/</span>
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline">Embassy Attestation</a>
                    </li>
                    <li className="flex items-center space-x-1">
                        <span className="text-gray-600">/</span>
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize cursor-default">{data.title}</a>
                    </li>
                </ol>
            </nav>
            <h1 className="text-2xl font-semibold pb-2 md:pb-4">{data.heading}</h1>
            <div className="text-base mb-5">{data.content}</div>
        </section>
    )
}

export default page