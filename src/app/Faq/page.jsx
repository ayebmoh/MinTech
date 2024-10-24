"use client";
import { useState } from "react";
import BreadCrumb from "../components/tools/BreadCrubm";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do you offer in IT consulting?",
      answer:
        "We provide a range of IT consulting services, including cybersecurity, web development, cloud solutions, business intelligence, and social media management. Our goal is to offer comprehensive digital solutions to meet your business needs.",
    },
    {
      question: "How can cybersecurity services protect my business?",
      answer:
        "Our cybersecurity services help safeguard your business by identifying vulnerabilities, preventing data breaches, and implementing security protocols such as data encryption, threat detection, and incident response. We ensure that your systems remain secure from potential cyber threats.",
    },
    {
      question: "What technologies do you use in web development?",
      answer:
        "We specialize in modern web technologies such as Next.js, Django, and MongoDB. Additionally, we integrate cloud services like Firebase to ensure scalable and secure web applications tailored to your business.",
    },
    {
      question: "Can you help with social media management?",
      answer:
        "Yes, we provide social media consulting and management services. We develop strategies to enhance your online presence, engage your audience, and grow your brand on platforms like Facebook, Instagram, and LinkedIn.",
    },
    {
      question:
        "What is business intelligence (BI) and how can it benefit my company?",
      answer:
        "Business Intelligence (BI) involves analyzing your company’s data to generate actionable insights. Our BI services include creating interactive dashboards, advanced analytics, and predictive models, helping you make informed business decisions and identify new opportunities.",
    },
    {
      question: "How can I schedule a consultation?",
      answer:
        "You can schedule a consultation by contacting us through our website, email, or phone. We will arrange a suitable time for an initial discussion to understand your needs and provide recommendations.",
    },
    {
      question: "How do you ensure data security in your services?",
      answer:
        "We prioritize data security by employing industry-standard encryption, regular security audits, and strict access control measures. Our team follows best practices to ensure the safety and confidentiality of your business data.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, we offer ongoing support and maintenance services after the completion of projects to ensure that your systems remain updated, secure, and fully functional.",
    },
    {
      question: "Can your services be customized for small businesses?",
      answer:
        "Absolutely. We tailor our IT consulting and digital services to meet the specific needs of businesses of all sizes, including small businesses. Our solutions are designed to be scalable and adaptable to various business requirements.",
    },
  ];

  return (
    <>
      <BreadCrumb Title="Faq" />
      <section className="">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold  lg:text-3xl text-white">
            Frequently asked questions
          </h1>

          <div className="mt-8 space-y-8 lg:mt-12">
            {faqData.map((item, index) => (
              <div key={index} className="p-8  rounded-lg bg-gray-800">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleAnswer(index)}
                >
                  <h1 className="font-semibold  text-white">{item.question}</h1>
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 transition-transform duration-200 ${
                        activeIndex === index ? "rotate-45" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="mt-6 text-sm  text-gray-300">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
