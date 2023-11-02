import { useEffect, useState } from "react";

export function useDarkMode() {
  // the useState will look in the storage if there is any theme else it will use the system default
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  // match if exist dark theme then apply
  function userSystemMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  userSystemMatch();

  // switch between themes and saving to the localStorage
  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        console.log("dark removed");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        userSystemMatch();
        break;
    }
  }, [theme]);

  // listen if the client changes his system preferences.
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });

  return { theme, setTheme, userSystemMatch };
}
