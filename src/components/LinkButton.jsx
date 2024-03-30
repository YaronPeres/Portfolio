import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import { motion } from "framer-motion";

let data = [
  {
    id: "31231",
    name: "Visit my LinkedIn",
    icon: (
      <FaLinkedin className="text-blue-600 dark:text-blue-400 w-full h-full flex bg-custom-background" />
    ),
    url: "https://www.linkedin.com/in/yaron-peres/",
    colorControl:
      " bg-blue-600 dark:bg-blue-400 text-white dark:text-secondary-800",
  },
  {
    id: "1111",
    name: "Visit my GitHub",
    icon: (
      <FaGithubSquare className="dark:text-secondary-300 text-secondary-800 bg-custom-background w-full h-full flex" />
    ),
    url: "https://github.com/YaronPeres",
    colorControl:
      " bg-secondary-800 dark:bg-secondary-300 dark:text-secondary-800 text-white",
  },
  {
    id: "3111312",
    name: "Contact me!",
    icon: (
      <FaEnvelopeSquare className="text-red-600 dark:text-red-500 w-full h-full flex bg-custom-background" />
    ),
    url: "mailto:yaronpdev@gmail.com",
    colorControl:
      " bg-red-600 dark:bg-red-500 text-white dark:text-secondary-800",
  },
];

function LinkButton() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="hidden fixed top-[45%] sm:flex items-center w-13 justify-start">
      <ul className="flex flex-col w-auto">
        {data.map((icon) => (
          <li key={icon.id} className="flex flex-row items-center">
            <a
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center z-50 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-105"
              onMouseEnter={() => setHoveredId(icon.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {icon.icon}
            </a>

            {hoveredId === icon.id && (
              <motion.span
                initial={{ x: "-50%", opacity: 0, scale: 0.4 }}
                animate={{ x: 0, opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`z-20 sm:h-7 md:h-9 lg:h-10 pl-4 pr-2 font-bold text-lg rounded-md flex scale-105 items-center ${icon.colorControl}`}
              >
                {icon.name}
              </motion.span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkButton;
