import SocialHero from "@/app/assets/socialmedia.png";
import SocialBot from "@/app/assets/socialmedia2.png";
import { FaCircleCheck } from "react-icons/fa6";
import { RiSafe2Line } from "react-icons/ri";
import { IoColorPaletteOutline } from "react-icons/io5";
import BreadCrumb2 from "../components/tools/BradCrumb2";

const SocialMediaManagement = () => {
  return (
    <>
      <section>
        <BreadCrumb2 Title="Social Media Management" />
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:py-20">
          <div className="grid gap-16 md:grid-cols-2 md:gap-4 lg:grid-cols-[1fr_340px_1fr]">
            <div className="flex flex-col items-start pt-10 gap-16 [grid-area:1/1/2/3] md:gap-18 md:[grid-area:1/1/2/2] lg:[grid-area:1/1/2/2]">
              <div className="animate-fade-up flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-2.5">
                    <FaCircleCheck className="text-gray-900" size={26} />
                  </div>
                  <p className="max-w-xs text-gray-100 md:max-w-[256px]">
                    Transform your social media presence with professional
                    management!
                  </p>
                </div>
                <h3 className="text-2xl text-gray-400 font-bold md:text-3xl">
                  Expand Your Reach. Boost Engagement. Drive Results.
                </h3>
              </div>
              <div className="animate-fade-up flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-2.5">
                    <FaCircleCheck className="text-gray-900" size={26} />
                  </div>
                  <p className="max-w-xs text-gray-100 md:max-w-[256px]">
                    Say goodbye to inconsistent posting and scattered strategy.
                  </p>
                </div>
                <h3 className="  text-2xl text-gray-400 font-bold md:text-3xl">
                  Maximize Brand Awareness. Stay Connected.
                </h3>
              </div>
            </div>
            <div className=" animate-fade-up animate-delay-700 animate-once pb-20 bg-contain rounded-3xl [grid-area:3/1/4/3] sm:h-[600px] sm:w-[700px] lg:[grid-area:1/2/1/3]">
              <img
                className="h-full rounded-3xl lg:mr-28"
                src={SocialHero.src}
                alt="Social media management illustration"
              />
            </div>
            <div className="flex flex-col items-start pt-10 gap-16 [grid-area:2/1/3/3] md:gap-18 md:[grid-area:1/2/2/3] lg:[grid-area:1/3/4/4]">
              <div className="animate-fade-up flex flex-col gap-4 md:items-end">
                <div className="flex items-center gap-4 md:flex-row-reverse">
                  <div className="rounded-full bg-gray-100 p-2.5">
                    <FaCircleCheck className="text-gray-900" size={26} />
                  </div>
                  <p className="max-w-xs text-gray-200 md:max-w-[256px] md:text-right">
                    Take control of your online brand.
                  </p>
                </div>
                <h3 className="text-2xl text-gray-400 font-bold md:text-right md:text-3xl">
                  Efficient Management. Meaningful Engagement.
                </h3>
              </div>
              <div className="animate-fade-up flex flex-col gap-4 md:items-end">
                <div className="flex items-center gap-4 md:flex-row-reverse">
                  <div className="rounded-full bg-gray-100 p-2.5">
                    <FaCircleCheck className="text-gray-900" size={26} />
                  </div>
                  <p className="max-w-xs text-gray-200 md:max-w-[256px] md:text-right">
                    Streamline processes and keep your audience engaged.
                  </p>
                </div>
                <h3 className="text-2xl text-gray-400 font-bold md:text-right md:text-3xl">
                  Improve Conversions. Strengthen Relationships.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full py-12 bg-gradient-to-r from-sky-700 to-sky-800">
        <div className="animate-fade-up container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Empower Your Brand with Effective Social Media Strategies
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Let us help you elevate your online presence and engage with your
            audience in meaningful ways.
          </p>
          <a
            href="/contact-us"
            className="inline-block mt-6 px-8 py-4 text-lg font-medium text-sky-700 bg-gray-100  rounded-full hover:bg-gray-300 transition-all duration-300"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <section className="relative w-full pt-16">
        <div className="mx-auto w-full max-w-7xl px-5 py-8">
          <div className="relative w-full">
            <div className="relative overflow-hidden rounded-3xl bg-white bg-opacity-[0.01]">
              <div className="relative">
                <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                  <div className="animate-fade-up relative">
                    <p className="pb-4 text-xl text-gray-200 md:pb-8 md:text-2xl">
                      Develop compelling social media strategies tailored to
                      your brand.
                    </p>
                    <div className="flex flex-wrap items-center justify-start gap-4 md:gap-6">
                      <div className="text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-10 w-10"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.125 14.625H13.5m-3.375 3.375h3.375m6-12.75h-12.75a2.625 2.625 0 00-2.625 2.625v12.75A2.625 2.625 0 007.875 21.75h12.75a2.625 2.625 0 002.625-2.625v-12.75a2.625 2.625 0 00-2.625-2.625z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg text-gray-400">
                          Build a vibrant community.
                        </p>
                      </div>
                    </div>
                    <div className=" mt-8 flex flex-wrap items-center justify-start gap-4 md:gap-6">
                      <div className="text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-10 w-10"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 9.75h7.5m-7.5 4.5h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg text-gray-400">
                          Grow your social presence across platforms.
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-start gap-4 md:gap-6">
                      <div className="text-white">
                        <RiSafe2Line className="h-9 w-10" />
                      </div>
                      <div>
                        <p className="text-lg text-gray-400">
                          Safeguard your reputation with consistent strategies.
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-start gap-4 md:gap-6">
                      <div className="text-white">
                        <IoColorPaletteOutline className="h-9 w-10" />
                      </div>
                      <div>
                        <p className="text-lg text-gray-400">
                          Engage with visuals that resonate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 top-0 z-0 flex h-full w-full justify-end">
                  <img
                    className="hidden animate-slide-in-right lg:block md:w-[600px] lg:w-[600px]"
                    src={SocialBot.src}
                    alt="Social Media Management"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMediaManagement;
