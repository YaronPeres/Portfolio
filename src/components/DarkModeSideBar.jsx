import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "../hooks/useDarkMode";

import { faSun, faDisplay, faMoon } from "@fortawesome/free-solid-svg-icons";

function DarkModeSideBar() {
  const { theme, setTheme } = useDarkMode();

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
    <div>
      {options?.map((opt) => (
        <button
          key={opt.text}
          className={`dark:hover:bg-secondary-700 w-full text-xl uppercase font-semibold hover:bg-slate-100 items-center flex p-2 rounded-lg ${
            theme === opt.text
              ? "dark:text-[#0BA5E9] text-[#0BA5E9]"
              : "dark:text-secondary-300"
          }`}
          onClick={() => setTheme(opt.text)}
        >
          <FontAwesomeIcon
            className={`w-4 mr-2 text-lg ${
              theme === opt.text
                ? "dark:text-[#0BA5E9] text-[#0BA5E9]"
                : "text-slate-700 dark:text-secondary-300"
            }`}
            icon={opt.icon}
          />
          {opt.view}
        </button>
      ))}
    </div>
  );
}

export default DarkModeSideBar;
