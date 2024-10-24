import BreadCrumb2 from "../components/tools/BradCrumb2";
import CyberHero from "@/app/assets/cybersec2.png";
import CyberFoot from "@/app/assets/cyberfoot.jpg";
const CyberSecurity = () => {
  return (
    <>
      <BreadCrumb2 Title="Cyber Security services" />

      <div className="2xl:container 2xl:mx-auto  lg:px-20 md:py-6 md:px-6 py-9 px-4">
        {/* About Services */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center animate-fade-up">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-200 pb-4 animate-slide-in-left">
              AI Services We Provide
            </h1>
            <p className="font-normal text-base leading-6 text-gray-400 animate-fade-up">
              We offer cutting-edge AI solutions that streamline business
              processes, enhance decision-making, and automate routine tasks.
              From intelligent chatbots to advanced data analytics and
              personalized user experiences, our AI services help drive
              innovation and growth across industries.
            </p>

            <ul className="mt-5 flex flex-col gap-4 text-gray-400 mb-6 animate-fade-up">
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
                Custom AI-Powered Solutions{" "}
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
                Natural Language Processing (NLP) Integration
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
                Machine Learning Model Deployment
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
                AI-Driven Data Analysis and Insights
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
                Automated Customer Support (Chatbots)
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
                Computer Vision and Image Recognition Solutions
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
                AI-Based Process Automation
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-8/12 animate-fade animate-delay-500">
            <img
              className="w-full h-full"
              src={CyberHero.src}
              alt="AI Services"
            />
          </div>
        </div>
      </div>
      <div className="relative flex-1 bg-gradient-to-br from-sky-600 via-slate-900/55 to-sky-900 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-center text-4xl font-bold leading-tight text-white md:text-5xl">
            Automate customer support in under 2 weeks
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center space-y-5 sm:flex-row sm:gap-x-6 sm:space-y-0">
            <a
              href="/contact-us"
              target="_blank"
              rel="nofollow noreferrer"
              className="w-full rounded-3xl border border-sky-900 bg-sky-800 px-7 py-3 text-center text-base font-bold text-white transition-colors duration-150 ease-in-out hover:border-gray-800 hover:bg-sky-900 sm:w-auto sm:border-2"
            >
              Ask for Demo
            </a>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="relative bg-gradient-to-r from-sky-900 to-sky-800 overflow-hidden mt-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-sky-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-sky-900 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className=" sm:text-center lg:text-left">
                <div className=" w-full  lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="animate-fade-up flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-300 text-2xl font-bold font-manrope leading-normal">
                      Threat Detection
                    </h4>
                    <p className="text-gray-400 text-base font-normal leading-relaxed">
                      Identify and mitigate potential threats before they
                      escalate with real-time threat detection and monitoring.
                    </p>
                  </div>
                  <div className="animate-fade-up flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-300 text-2xl font-bold font-manrope leading-normal">
                      Data Encryption
                    </h4>
                    <p className="text-gray-400 text-base font-normal leading-relaxed">
                      Safeguard sensitive information with advanced encryption
                      techniques, ensuring secure communication and data
                      storage.
                    </p>
                  </div>
                  <div className="animate-fade-up flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-300 text-2xl font-bold font-manrope leading-normal">
                      Incident Response
                    </h4>
                    <p className="text-gray-400 text-base font-normal leading-relaxed">
                      Be prepared for cyber incidents with proactive response
                      strategies to minimize damage and ensure swift recovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={CyberFoot.src}
            alt="Cybersecurity"
          />
        </div>
      </div>
    </>
  );
};

export default CyberSecurity;
