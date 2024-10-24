"use client";

import { usePathname } from "next/navigation";
import Logo from "@/app/assets/logo.png";
import { useEffect } from "react";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuElement = document.getElementById("mobile-menu");
      if (menuElement && !menuElement.contains(event.target)) {
        toggleMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-y-0 left-0 z-10 bg-neutral-900/90 w-64 transform transition-transform duration-300 md:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col items-start justify-start h-full p-4">
        <a href="/" className="flex items-center mb-8" onClick={toggleMenu}>
          <img src={Logo.src} alt="logo" className="w-24 h-20" />
          <span className="italic text-3xl font-semibold text-white">
            <span className="text-sky-800">M</span>in
            <span className="text-sky-800">T</span>ech
          </span>
        </a>
        <ul className="flex flex-col space-y-4">
          {["/", "/services", "/Faq", "/contact-us"].map((link, index) => {
            const linkName =
              link === "/"
                ? "Home"
                : link.substring(1).charAt(0).toUpperCase() + link.slice(2);
            return (
              <li key={index}>
                <a
                  href={link}
                  className={`text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sky-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left ${
                    pathname === link ? "after:scale-x-100" : ""
                  }`}
                  onClick={() => {
                    toggleMenu();
                  }}
                  aria-current={pathname === link ? "page" : undefined}
                >
                  {linkName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
