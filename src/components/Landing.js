const collections = [
    {
      name: "Indoor",
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      imageAlt: 'Bathroom Remodel',
    },
    {
      name: "Outdoor",
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1602860739945-9a61573cd62d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      imageAlt: 'Repair',
    },
    {
      name: 'Restoration',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      imageAlt: 'Painted Wall',
    },
  ]
  
  export default function Example() {
    return (
      <div className="relative bg-white">
        {/* Background image and overlap */}
        <div aria-hidden="true" className="hidden absolute inset-0 sm:flex sm:flex-col">
          <div className="flex-1 relative w-full">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="absolute inset-0 opacity-50" />
          </div>
          <div className="w-full bg-white h-32 md:h-40 lg:h-48" />
        </div>
  
        <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
          {/* Background image and overlap */}
          <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
            <div className="flex-1 relative w-full">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="w-full bg-white h-48" />
          </div>
          <div className="relative py-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#221B1E] sm:text-5xl md:text-6xl">New Face Remodel</h1>
            <div className="mt-4 sm:mt-6">
              <a
                href="#"
                className="inline-block bg-main-btn border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-main-hover"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
  
        <section aria-labelledby="collection-heading" className="-mt-96 relative sm:mt-0">
          <h2 id="collection-heading" className="sr-only">
            Collections
          </h2>
          <div className="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
              >
                <div>
                  <div aria-hidden="true" className="absolute inset-0 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                      <img
                        src={collection.imageSrc}
                        alt={collection.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                  </div>
                  <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                    <div>
                      <p aria-hidden="true" className="text-sm text-white">
                        See the collection
                      </p>
                      <h3 className="mt-1 font-semibold text-white">
                        <a href={collection.href}>
                          <span className="absolute inset-0" />
                          {collection.name}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }
  