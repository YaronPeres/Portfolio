import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "../hooks/useDarkMode";
import { useEffect, useRef, useState } from "react";
import { faSun, faDisplay, faMoon } from "@fortawesome/free-solid-svg-icons";

function DarkmodeToggle() {
  const { theme, setTheme } = useDarkMode();

  // Local state to control the visibility of the menu
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  // Function to toggle the menu's visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const closeMenuOnClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("click", closeMenuOnClickOutside);
    } else {
      document.removeEventListener("click", closeMenuOnClickOutside);
    }

    return () => {
      document.removeEventListener("click", closeMenuOnClickOutside);
    };
  }, [showMenu]);

  let icon;
  switch (theme) {
    case "light":
      icon = (
        <FontAwesomeIcon
          className="w-5 h-5 md:w-6 md:h-6 text-primary-500 active:text-primary-700 dark:hover:text-primary-400 hover:text-primary-600"
          icon={faSun}
        />
      );
      break;
    case "dark":
      icon = (
        <FontAwesomeIcon
          className="w-5 h-5 md:w-6 md:h-6 text-primary-500 dark:active:text-primary-300 dark:hover:text-primary-400 hover:text-primary-600"
          icon={faMoon}
        />
      );
      break;
    case "system":
      icon = (
        <FontAwesomeIcon
          className="w-5 h-5 md:w-6 md:h-6 active:text-primary-700 dark:active:text-primary-300 text-primary-500 dark:hover:text-primary-400 hover:text-primary-600"
          icon={faDisplay}
        />
      );
      break;
    default:
      icon = null; // Handle the default case
      break;
  }
  const options = [
    {
      icon: faSun,
      text: "light",
      view: "Light",
    },
    {
      icon: faMoon,
      text: "dark",
      view: "Dark",
    },
    {
      icon: faDisplay,
      text: "system",
      view: "System",
    },
  ];

  return (
    <div ref={menuRef} className="relative mt-1 mr-2">
      <button onClick={toggleMenu} className="">
        {icon}
      </button>
      {showMenu && (
        <div className="relative">
          <ul className="absolute bg-white rounded-lg transform sm:translate-x-8 translate-x-5 ring-1 ring-slate-900/10 shadow-lg w-26 md:w-32 md:h-32 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-6 md:mt-7.2 right-0 sm:mt-8">
            <li className="py-1 px-2 flex flex-col cursor-pointer rounded-lg">
              {options?.map((opt) => (
                <button
                  key={opt.text}
                  className={`dark:hover:bg-secondary-700 hover:bg-slate-100 items-center flex p-1 w-full md:text-xl space-x-px rounded-lg ${
                    theme === opt.text && "text-[#0BA5E9]"
                  }`}
                  onClick={() => setTheme(opt.text)}
                >
                  <FontAwesomeIcon
                    className={`w-4 mr-2 ${
                      theme === opt.text
                        ? "dark:text-[#0BA5E9] text-[#0BA5E9]"
                        : "text-secondary-500"
                    }`}
                    icon={opt.icon}
                  />
                  {opt.view}
                </button>
              ))}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DarkmodeToggle;
