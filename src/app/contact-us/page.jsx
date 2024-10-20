import BreadCrumb from "../components/tools/BreadCrubm";
import Contact from "@/app/assets/contact.png";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div>
      <BreadCrumb Title="Contact Us" />

      <div className="bg-gradient-to-b from-transparent via-sky-900/65 via-50% to-slate-900 font-[sans-serif] lg:h-screen">
        <div className="grid lg:flex lg:flex-row items-center max-lg:justify-center gap-6 lg:gap-0 h-full sm:p-12 p-4 max-sm:p-4">
          <div className="max-w-lg max-lg:mx-auto max-lg:text-center ">
            <h2 className="text-4xl font-extrabold text-gray-200">
              Get In Touch
            </h2>
            <p className="text-md text-gray-300 mt-4 leading-relaxed">
              Feel free to reach out to us with any inquiries or project needs.
              Our team is here to assist you in finding tailored solutions to
              help your business thrive. Whether you have questions about our
              services or want to explore how we can collaborate, we’re just a
              message away!
            </p>
            <div className=" text-start  flex w-full my-3 justify-center lg:justify-start items-center flex-row gap-3">
              <MdEmail className="text-sky-500  h-10 w-10 font-bold" />

              <h1 className="text-white text-xl   font-bold">
                admin@mintech.io
              </h1>
            </div>
            <form className="mx-auto py-5 bg-white rounded-lg p-6 shadow-md space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-sky-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-sky-600"
              />
              <select
                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-sky-600 "
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
                rows="6"
                className="w-full rounded-md px-6 bg-[#f0f1f2] outline-sky-600 text-sm pt-3 "
              ></textarea>
              <button
                type="button"
                className="text-white bg-sky-600 hover:bg-sky-700 font-semibold rounded-md text-sm px-6 py-3 block w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="z-10 flex mx-auto flex-col text-center gap-7 relative  lg:">
            <img
              src={Contact.src}
              className=" md:w-[600px] lg:w-[800px] object-contain block mx-auto  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
