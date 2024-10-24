import Hero1 from "@/app/assets/bi-hero1.jpg";
import Hero2 from "@/app/assets/bi-hero2.jpg";
import Foot from "@/app/assets/bi-b.jpg";
import BreadCrumb2 from "../components/tools/BradCrumb2";
import BiMockup from "@/app/assets/Bimock.png";
const Bi = () => {
  return (
    <>
      {" "}
      <BreadCrumb2 Title="Business Intelligence" />
      <section className="py-12 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="animate-slide-in-left w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className=" pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className="rounded-xl object-cover"
                  src={Hero1.src}
                  alt="BI Insights Image"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src={Hero2.src}
                alt="BI Data Visualization Image"
              />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="animate-slide-in-right w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-300 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Empowering Data-Driven Decisions with Business Intelligence
                  </h2>
                  <p className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                    Our Business Intelligence services turn complex data into
                    actionable insights, helping businesses make smarter
                    decisions. With advanced analytics, interactive dashboards,
                    and predictive modeling, we empower organizations to uncover
                    hidden opportunities, optimize operations, and gain a
                    competitive edge by transforming raw data into clear,
                    strategic insights.
                  </p>
                </div>
              </div>
              <button className="animate-fade-up sm:w-fit w-full px-3.5 py-2 bg-sky-700 hover:bg-sky-900 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Explore Our BI Solutions
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* 2nd section */}
        <div className="grid md:grid-cols-3 gap-6 min-h-[164px] w-full my-14 py-8 p-16 bg-gradient-to-tr from-sky-900 via-slate-900 to-sky-900 font-sans overflow-hidden">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-white">
              Unlock the Power of Business Intelligence!
            </h1>
            <p className="text-base text-gray-200 mt-4">
              Leverage our tailored Business Intelligence solutions to transform
              your data into actionable insights. Make informed decisions and
              drive your business growth with advanced analytics and reporting
              tools.
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
              src={BiMockup.src}
              alt="Banner Image"
              className="w-full hidden xl:block right-4 top-[-13px] md:absolute skew-x-[-16deg] rotate-2 object-cover"
            />
          </div>
        </div>
        <div
          id="about"
          className="relative bg-gradient-to-r from-sky-900 to-sky-800 overflow-hidden mt-16"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-sky-900   sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0  inset-y-0 h-full w-48 text-sky-900 transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
              </svg>

              <div className="pt-1"></div>

              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                    <div className="animate-fade-up flex-col justify-start items-start inline-flex">
                      <h4 className="text-gray-300 text-2xl font-bold font-manrope leading-normal">
                        Advanced Analytics
                      </h4>
                      <p className="text-gray-400 text-base font-normal leading-relaxed">
                        Unlock the power of data with deep insights that help
                        you predict trends, spot opportunities, and make
                        informed decisions.
                      </p>
                    </div>
                    <div className="animate-fade-up flex-col justify-start items-start inline-flex">
                      <h4 className="text-gray-300 text-2xl font-bold font-manrope leading-normal">
                        Interactive Dashboards
                      </h4>
                      <p className="text-gray-400 text-base font-normal leading-relaxed">
                        Visualize your data in real-time, making complex data
                        easy to understand and explore with interactive,
                        user-friendly dashboards.
                      </p>
                    </div>
                    <div className="animate-fade-up flex-col justify-start items-start inline-flex">
                      <h4 className="text-gray-300 text-2xl font-bold font-manrope leading-normal">
                        Predictive Modeling
                      </h4>
                      <p className="text-gray-400 text-base font-normal leading-relaxed">
                        Leverage predictive models to forecast future outcomes,
                        enabling proactive strategies that align with your
                        business goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute  lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={Foot.src}
              alt="BI Foot"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Bi;
