import WebMockup from "@/app/assets/web-mockup.png";
import Mobile from "@/app/assets/mobile.jpg";
import Web1 from "@/app/assets/web1.jpg";
import Web2 from "@/app/assets/web2.jpg";
import BreadCrumb2 from "../components/tools/BradCrumb2";
const Development = () => {
  return (
    <>
      <BreadCrumb2 Title="Web & Mobile Development" />
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 animate-slide-in-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Web Development
          </h2>
          <p className="mb-4  animate-fade-up">
            Our web development services include building responsive,
            interactive, and dynamic websites using modern technologies such as
            React, Next.js, and Django. We focus on providing scalable,
            SEO-optimized solutions tailored to your business needs.
          </p>
          <p className=" animate-fade-up">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
          <ul className="animate-fade-up mt-5 flex flex-col gap-4 text-gray-400 mb-6">
            <li className="flex items-center gap-3 text-lg text-gray-300">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                className="bg-sky-600 fill-white rounded-full p-[3px]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              Custom website development
            </li>
            <li className="flex items-center gap-3 text-lg text-gray-300">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                className="bg-sky-600 fill-white rounded-full p-[3px]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              Content management systems (CMS)
            </li>
            <li className="flex items-center gap-3 text-lg text-gray-300">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                className="bg-sky-600 fill-white rounded-full p-[3px]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              E-commerce solutions
            </li>
            <li className="flex items-center gap-3 text-lg text-gray-300">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                className="bg-sky-600 fill-white rounded-full p-[3px]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              API integrations
            </li>
          </ul>
        </div>
        <div className="grid animate-fade animate-delay-500 grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={Web1.src}
            alt="office content 1"
          />
          <img
            className="mt-4  w-full lg:mt-10 rounded-lg"
            src={Web2.src}
            alt="office content 2"
          />
        </div>
      </div>
      {/* 2nd section */}
      <div className="grid md:grid-cols-3 gap-6 min-h-[164px] w-full py-8 p-16 bg-gradient-to-r from-sky-900 to-sky-700 font-sans overflow-hidden">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-white">
            Enhance Your Projects Instantly!
          </h1>
          <p className="text-base text-gray-200 mt-4">
            Get tailored web and mobile development services that deliver
            responsive, high-performance solutions to meet your business needs.{" "}
          </p>
          <a href="/contact-us">
            <button
              type="button"
              className="py-3 px-6 text-sm font-semibold bg-white text-blue-600 hover:bg-slate-100 rounded-md mt-8"
            >
              Request a Demo
            </button>
          </a>
        </div>

        <div className="relative animate-slide-in-left max-md:hidden">
          <img
            src={WebMockup.src}
            alt="Banner Image"
            className="w-full right-4 top-[-13px] md:absolute skew-x-[-16deg] rotate-2 object-cover"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto my-12">
        <div className="mt-12 mx-5 xl:mx-auto ">
          <div className="grid md:grid-cols-2 items-center gap-16 md:min-h-[340px]">
            <div>
              <h3 className="text-gray-200 animate-slide-in-left text-3xl font-bold mb-4">
                Mobile Development
              </h3>
              <p className="text-gray-400 text-xl animate-fade-up">
                From native iOS and Android applications to cross-platform
                solutions, we specialize in creating mobile apps that deliver
                seamless user experiences across devices.
              </p>

              <ul className="space-y-4 animate-fade-up mt-8">
                <li className="flex items-center gap-3 text-lg text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    className="bg-sky-600 fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  iOS & Android native development{" "}
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    className="bg-sky-600 fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Cross-platform development (React Native, Flutter){" "}
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    className="bg-sky-600 fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  App store optimization (ASO){" "}
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    className="bg-sky-600 fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Push notifications & user engagement
                </li>
              </ul>
            </div>
            <img
              src={Mobile.src}
              className="animate-fade animate-delay-500 w-full object-contain rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Development;
