"use client";
import { motion } from "framer-motion";
import illustration from "@/app/assets/contact-us.png";

const ContactSection = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true, amount: 0.3 }}
        className="font-[sans-serif] max-w-7xl mx-auto relative bg-gradient-to-t from-sky-600 via-slate-800 to-sky-900 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden my-20"
      >
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-sky-800"></div>
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-sky-600"></div>

        <div className="grid md:grid-cols-2 py-8 px-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center flex flex-col items-center justify-center"
          >
            <img src={illustration.src} className="shrink-0 w-5/6" />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-tl-3xl rounded-bl-3xl"
          >
            <h2 className="text-2xl text-sky-400 font-bold text-center mb-6">
              Contact us
            </h2>
            <div className="max-w-md mx-auto space-y-3 relative">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-sky-600 focus:bg-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-sky-600 focus:bg-white"
              />
              <select
                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-sky-600 focus:bg-white"
                name="services"
                id="services"
                required
              >
                <option value="" disabled selected>
                  Choose Service
                </option>
                <option value="product_Design">Product Design</option>
                <option value="IT_Management">IT Management</option>
                <option value="AI_Solutions">AI Solutions</option>
                <option value="Cyber_Security">Cyber Security</option>
                <option value="Business_Intelligence">
                  Business Intelligence
                </option>
                <option value="desktopComputing">Desktop Computing</option>
                <option value="Social_Media_Management">
                  Social Media Management
                </option>
                <option value="web_Development">Web Development</option>
                <option value="Mobile_Development">Mobile Development</option>
                <option value="Others">Other</option>
              </select>
              <textarea
                placeholder="Message"
                rows="7"
                className="w-full bg-gray-100 rounded-md px-4 text-sm pt-3 outline-sky-600 focus:bg-white"
              ></textarea>

              <button
                type="button"
                className="text-white w-full relative bg-sky-500 hover:bg-sky-600 rounded-md text-sm px-6 py-3 !mt-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  className="mr-2 inline"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                  />
                </svg>
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
