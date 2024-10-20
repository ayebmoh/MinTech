"use client";
import { useEffect, useRef, useState } from "react";

const Section = ({ Icon, title, description, imgSrc, isImageRight, path }) => {
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setInView(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="relative">
      <div
        className={`lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ${
          isImageRight ? "lg:grid-cols-2 lg:col-start-2" : ""
        }`}
      >
        <div
          className={`mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${
            isImageRight ? "lg:order-2" : ""
          } ${
            inView
              ? isImageRight
                ? "animate-slide-in-left"
                : "animate-slide-in-right"
              : "opacity-0"
          }`}
        >
          <div>
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600">
                {Icon}
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                {title}
              </h2>
              <p className="mt-4 text-lg text-gray-300">{description}</p>
              <div className="mt-6">
                <a
                  className="inline-flex rounded-lg bg-sky-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-600 hover:bg-sky-700 hover:ring-sky-700"
                  href={`/${path}`}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-12 sm:mt-16 lg:mt-0 ${
            isImageRight ? "lg:order-1" : ""
          } ${inView ? "animate-fade-in" : "opacity-0"}`}
        >
          <div
            className={`${isImageRight ? "-ml-32 pr-6" : "-mr-32 pl-6"} md:${
              isImageRight ? "ml-8" : "-mr-8"
            } lg:relative lg:m-0 lg:h-full lg:px-0`}
          >
            <img
              loading="lazy"
              width="500"
              height="300"
              className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-full lg:max-w-none"
              src={imgSrc}
              alt="Service Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
