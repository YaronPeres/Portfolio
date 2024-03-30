import { useState, useEffect, useRef } from "react";

import Button from "./Button";
import DarkModeSideBar from "./DarkModeSideBar";
import LinkButtonMobile from "./LinkButtonMobile";

function SideBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    const closeMenuOnClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenuOnClickOutside);

    return () => {
      document.removeEventListener("click", closeMenuOnClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div ref={menuRef} className="mx-auto z-40 max-w-7xl">
      <div className="relative flex items-center justify-between">
        <div className="absolute inset-y-0 right-0 flex items-center">
          {/* mobile menu button */}
          <button
            type="button"
            className="relative z-50 inline-flex items-center justify-center p-1 text-[#0BA5E9] dark:hover:text-[#38BDF8] hover:text-primary-600 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            {/* icon when menu is closed
      menu open: "hidden", Menu closed "blocked" */}
            <svg
              className={`h-10 w-10 ${isMobileMenuOpen ? "hidden" : "block"}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {/* icon menu is open
      menu open: "block", Menu closed: "hidden" */}
            <svg
              className={`h-10 w-10 ${isMobileMenuOpen ? "block" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu, show/hide based on menu state */}
      <div
        className={`sm:hidden top-0 dark:border-primary-500 flex flex-col items-start justify-evenly border-l rounded-s right-0 fixed h-full w-[40vw] bg-white duration-300 dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mx-auto ml-4">
          <Button onClick={toggleMobileMenu} to="home" type="menuOpen">
            Home
          </Button>
          <Button onClick={toggleMobileMenu} to="projects" type="menuOpen">
            Projects
          </Button>
          <Button onClick={toggleMobileMenu} to="experience" type="menuOpen">
            Experience
          </Button>
          <Button onClick={toggleMobileMenu} to="contact" type="menuOpen">
            Contact
          </Button>
        </div>
        <div className="mx-auto ml-5">
          <DarkModeSideBar />
        </div>

        <LinkButtonMobile />
      </div>
    </div>
  );
}

export default SideBar;
