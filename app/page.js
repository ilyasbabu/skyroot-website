import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="bg-gray-200 text-gray-800">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div className="w-full lg:w-1/3 mix-blend-multiply" style={{ backgroundImage: "url('/images/1a.jpeg')", backgroundPosition: 'center center', backgroundSize: 'cover' }}></div>
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 text-sky-600">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <h2 className="text-3xl font-semibold leadi">Best Attestation Service Provider</h2>
            <p className="mt-4 mb-8 text-sm">Skyroots provide assured administrative assistance and service.</p>
            <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-sky-600 text-gray-50">Quick Track</button>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-12 bg-gray-50 text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Our Quality Servces Includes</h2>
            <p className="font-serif text-sm text-gray-600">Trust our expertise to navigate the complexities of certificate attestation and take your dreams across borders.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50">
            <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Certificate Attestation</h3>
              <p className='line-clamp-3 sm:line-clamp-6'>Attestation is a legal acknowledgment of evaluating the authenticity of educational and non-educational documents from home country to certify it’s genuinity.Normally Indian Government provides two types of attestation in Indian Certificates. One is Apostille attestation by MEA i.e. Ministry of External affairs and the other one is by the concerned Embassy of the hosting country.</p>
              <a className="inline-flex items-center space-x-2 text-sm text-sky-600" href="/components">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
              <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">MEA / Appostile</h3>
                <p className='line-clamp-3'>MEA(Ministry of External Affairs) is a central government body which communicates international affairs.Only the MEA can do the Apostille attestation and Embassy approved attestation on the certificates. The documents which have been used in other nations require the MEA Attestation should be first authenticated by designated authorities of State/Union territory from where the document is issued</p>
                <a className="inline-flex items-center space-x-2 text-sm text-sky-600" href="/components">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
              <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">PCC</h3>
                <p className='line-clamp-3'>PCC means Police Clearance Certificate is a certificate issued by respective police authority/ police experts regarding the criminal status of a person. It is a confirmation issued by the nation of origin that the person is devoid of any criminal records or in any violations of legal code and rules of the nation. Criminal records may incorporate arrest, capture, conviction and conceivably court procedures. Simply, Police clearance certificate is a good conduct certificate issued by police authority of the nation of origin. It is called variously in each nation as police certificate, good conduct certificates, judicial records extracts, PCC, etc. PCC is a document required when you are planning to travel abroad for education or employment purposes.</p>
                <a className="inline-flex items-center space-x-2 text-sm text-sky-600" href="/components">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
              <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Visa Stamping</h3>
                <p className='line-clamp-3'>Visa, an official entry authorization to enter the territory and have to be used within a certain period of time. The authorization may be a document subject to permission of an immigration official at the time of entry, commonly it is a stamp endorsed in applicant’s passport.</p>
                <a className="inline-flex items-center space-x-2 text-sm text-sky-600" href="/components">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full bg-slate-0'>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-gray-800">
          <h2 className="mb-8 text-4xl font-bold leadi text-center">Our Attestation Services</h2>
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Ea et neque distinctio</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Quaerat obcaecati voluptatem </span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Quas eius repudianda</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Free and MIT licensed</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Praesentium ea et neque distinctio</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Architecto beatae esse ab amet </span>
            </li>
          </ul>
        </div>
      </section>

      <section className='w-full bg-slate-100'>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-gray-800">
          <h2 className="mb-8 text-4xl font-bold leadi text-center">Our Other Services</h2>
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Ea et neque distinctio</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Quaerat obcaecati voluptatem </span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Quas eius repudianda</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Free and MIT licensed</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Praesentium ea et neque distinctio</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Architecto beatae esse ab amet </span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Free and MIT licensed</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Praesentium ea et neque distinctio</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-sky-600">
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Architecto beatae esse ab amet </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="p-6 md:px-36  text-gray-800">
        <h2 className="mb-8 text-4xl font-bold leadi text-center">Why SkyRoots</h2>
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">

          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-sky-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-100">
                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-2xl font-semibold leadi">Tracking Facility</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-sky-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-100">
                <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-2xl font-semibold leadi">Affordable Cost</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-sky-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-100">
                <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                <rect width="32" height="32" x="80" y="264"></rect>
                <rect width="32" height="32" x="240" y="128"></rect>
                <rect width="32" height="32" x="136" y="168"></rect>
                <rect width="32" height="32" x="400" y="264"></rect>
                <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-2xl font-semibold leadi">Fast Service</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-sky-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-9 h-9 text-gray-100">
                <path d="M256.25,16A240,240,0,0,0,88,84.977V16H56V144H184V112H106.287A208,208,0,0,1,256.25,48C370.8,48,464,141.2,464,255.75S370.8,463.5,256.25,463.5,48.5,370.3,48.5,255.75h-32A239.75,239.75,0,0,0,425.779,425.279,239.75,239.75,0,0,0,256.25,16Z"></path>
                <polygon points="240 111.951 239.465 288 368 288 368 256 271.563 256 272 112.049 240 111.951"></polygon>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-2xl font-semibold leadi">24/7 Support</p>
            </div>
          </div>
        </div>
        <p className='p-3'>
          Skyroots attestation provide assured administrative assistance and service for genuine attestation of your valuable documents with safe handling and prompt delivery.At skyroots our primary target is to provide reliable and professional service on par with the international standards at affordable and competative rates. We currently provide assistance with Embassy attestation HRD,MEA etc
        </p>
      </section>
    </>
  )
}
