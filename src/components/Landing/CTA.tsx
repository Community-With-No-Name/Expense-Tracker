/* This example requires Tailwind CSS v2.0+ */
export default function CTA() {
    return (
      <div className="bg-black border-t">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-green-600">Join Our Community Today.</span>
          </h2>
          <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
              >
                Get Link
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  