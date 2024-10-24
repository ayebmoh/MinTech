import AiHero from "@/app/assets/aiHero.png";
import Ai1 from "@/app/assets/ai1.png";
import Ai2 from "@/app/assets/ai2.png";
import Ai3 from "@/app/assets/ai3.png";
import Ai4 from "@/app/assets/ai4.png";
import BreadCrumb2 from "../components/tools/BradCrumb2";
import AiMockup from "@/app/assets/aibanner.png";
const AiService = () => {
  return (
    <div>
      <BreadCrumb2 Title="AI Services" />

      <div className="2xl:container    md:py-6  py-9 ">
        {/* About Services */}
        <div className="flex flex-col 2xl:mx-auto lg:flex-row lg:px-20 md:px-6 px-4 justify-between gap-8">
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

          <div className="w-full md:w-8/12 animate-fade animate-delay-500">
            <img className="w-full h-full" src={AiHero.src} alt="AI Services" />
          </div>
        </div>
        <div className="grid md:grid-cols-3  gap-6 min-h-[164px] w-full py-8 p-16 bg-gradient-to-r from-sky-900 to-sky-700 font-sans overflow-hidden">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-white">
              Ready to Transform Your Business with AI?{" "}
            </h1>
            <p className="text-base text-gray-200 mt-4">
              Discover how our AI solutions can drive innovation, streamline
              processes, and enhance business growth. Get in touch with us for a
              free consultation and see how AI can revolutionize your business.
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
              src={AiMockup.src}
              alt="Banner Image"
              className="w-full hidden xl:block right-4 xl:top-[-28px] lg:top-[20px] md:absolute skew-x-[-16deg] -rotate-1 object-cover"
            />
          </div>
        </div>
        {/* Steps Solutions */}
        <div className="pt-20">
          <h1 className="text-3xl text-center lg:text-4xl font-bold text-gray-200 animate-slide-in-up">
            How AI Solutions Help Your Business
          </h1>
          <p className="font-normal text-center text-base leading-6 text-gray-400 animate-fade-up">
            Our AI solutions follow a clear and practical roadmap that ensures
            your business benefits from the power of artificial intelligence at
            every step.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col justify-center gap-16 pt-12">
          <div className="w-full lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4">
              {/* Step 1: Data Collection */}
              <div className="p-4 pb-6 flex justify-center rounded-md shadow-lg flex-col items-center transition transform hover:scale-105 hover:shadow-xl animate-delay-100 animate-fade-up">
                <img
                  className="md:block lg:w-64 lg:h-64 hidden"
                  src={Ai1.src}
                  alt="Data Collection"
                />
                <p className="font-medium text-xl leading-5 text-gray-400 mt-4">
                  Data Collection
                </p>
              </div>

              {/* Step 2: Data Processing */}
              <div className="p-4 pb-6 flex justify-center rounded-md shadow-lg flex-col items-center transition transform hover:scale-105 hover:shadow-xl animate-fade-up animate-delay-300">
                <img
                  className="md:block lg:w-64 lg:h-64 hidden"
                  src={Ai2.src}
                  alt="Data Processing"
                />
                <p className="font-medium text-xl leading-5 text-gray-400 mt-4">
                  Data Processing
                </p>
              </div>

              {/* Step 3: AI Model Development */}
              <div className="p-4 pb-6 flex justify-center rounded-md shadow-lg flex-col items-center transition transform hover:scale-105 hover:shadow-xl animate-fade-up animate-delay-500">
                <img
                  className="md:block lg:w-64 lg:h-64 hidden"
                  src={Ai3.src}
                  alt="AI Model Development"
                />
                <p className="font-medium text-xl leading-5 text-gray-400 mt-4">
                  AI Model Development
                </p>
              </div>

              {/* Step 4: Deployment & Monitoring */}
              <div className="p-4 pb-6 flex justify-center rounded-md shadow-lg flex-col items-center transition transform hover:scale-105 hover:shadow-xl animate-fade-up animate-delay-700">
                <img
                  className="md:block lg:w-64 lg:h-64 hidden"
                  src={Ai4.src}
                  alt="Deployment & Monitoring"
                />
                <p className="font-medium text-xl leading-5 text-gray-400 mt-4">
                  Deployment & Monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiService;
