
const page = () => {
    return (
        <section className='p-5 bg-gray-100 min-h-[80vh] '>
            <div className="py-6 text-gray-900 md:mx-36 lg:mx-56">
                <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <h1 className="text-4xl font-bold leadi">Track your Document</h1>
                        <p className="text-lg">Each document will reach its destination safely and on time.</p>
                    </div>
                    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                        <div className="flex flex-row">
                            <input type="text" placeholder="Enter track number" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                            <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-sky-600 text-gray-50">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page