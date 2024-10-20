"use client";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "../RemoteComponents";
import Logo from "@/app/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-4 pt-2">
        <a href="/" className="flex items-center mt-2 rtl:space-x-reverse">
          <img src={Logo.src} alt="logo" className="w-36 h-24" />
          <span className="md:mb-3 self-center text-3xl font-semibold whitespace-nowrap text-white">
            MinTech
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <Bars3Icon />
        </button>
        <div
          className="hidden md:mb-2  w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4  sm:gap-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <a
                href="/"
                className={`block py-2 text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0  after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left ${
                  pathname === "/" ? "after:scale-x-100" : ""
                }`}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/services"
                className={`block py-2 text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sky-600 after:scale-x-0  after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left ${
                  pathname === "/services" ? "after:scale-x-100" : ""
                }`}
                aria-current={pathname === "/services" ? "page" : undefined}
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="/faq"
                className={`block py-2 text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sky-600 after:scale-x-0  after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left ${
                  pathname === "/faq" ? "after:scale-x-100" : ""
                }`}
                aria-current={pathname === "/faq" ? "page" : undefined}
              >
                Faq
              </a>
            </li>

            <li>
              <a
                href="/contact-us"
                className={`block py-2 text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sky-600 after:scale-x-0  after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left ${
                  pathname === "/contact-us" ? "after:scale-x-100" : ""
                }`}
                aria-current={pathname === "/contact-us" ? "page" : undefined}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
