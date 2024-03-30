import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";

let data = [
  {
    id: "31231",
    name: "Visit my LinkedIn",
    icon: (
      <FaLinkedin className="text-blue-600 dark:text-blue-400 w-full h-full flex dark:bg-slate-800" />
    ),
    url: "https://www.linkedin.com/in/yaron-peres/",
    colorControl:
      " bg-blue-600 dark:bg-blue-400 text-white dark:text-secondary-800",
  },
  {
    id: "1111",
    name: "Visit my GitHub",
    icon: (
      <FaGithubSquare className="dark:text-secondary-300 text-secondary-800 dark:bg-slate-800 w-full h-full flex" />
    ),
    url: "https://github.com/YaronPeres",
    colorControl:
      " bg-secondary-800 dark:bg-secondary-300 dark:text-secondary-800 text-white",
  },
  {
    id: "3111312",
    name: "Contact me!",
    icon: (
      <FaEnvelopeSquare className="text-red-600 dark:text-red-500 w-full h-full flex dark:bg-slate-800" />
    ),
    url: "mailto:yaronpdev@gmail.com",
    colorControl:
      " bg-red-600 dark:bg-red-500 text-white dark:text-secondary-800",
  },
];

function LinkButton() {
  return (
    <div className="flex items-center w-full">
      <ul className="flex flex-row w-full justify-evenly">
        {data.map((icon) => (
          <li key={icon.id} className="flex items-center shadow-md">
            <a
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center z-50 w-9 h-9"
            >
              {icon.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkButton;
