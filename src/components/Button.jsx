import { Link } from "react-scroll";

function Button({ download, children, disabled, to, type, onClick, href }) {
  const base =
    "transform rounded-lg hover:cursor-pointer transition-transform duration-100 ease-in-out active:translate-y-1 inline-block text-sm tracking-wide ring-offset-2";
  const styles = {
    nav:
      base +
      " px-4 py-3 md:px-6 font-semibold active:text-primary-500 aria-[current=page]:text-primary-500 dark:aria-[current=page]:text-primary-500 uppercase hidden sm:inline-block text-primary-950 hover:text-primary-500 dark:hover:text-primary-500 dark:text-secondary-300 dark:focus:text-primary-400 focus:text-primary-400",
    menuOpen:
      " hover:cursor-pointer w-full font-semibold uppercase text-xl active:text-primary-500 aria-[current=page]:text-primary-500 dark:aria-[current=page]:text-primary-500 hover:bg-slate-100 dark:hover:bg-secondary-700 font-semibold dark:text-slate-300 text-slate-700 flex rounded-md px-3 py-3",
    normal:
      base +
      " dark:text-secondary-200 px-4 py-2 my-2 md:px-5 lg:px-6 md:py-5 lg:py-4 md:my-3 shadow-md shadow-primary-950 dark:shadow-primary-500 dark:shadow-md dark:border-secondary-200 border-2 flex items-center dark:hover:text-primary-950 dark:hover:shadow-none dark:hover:border-primary-500 border-primary-950 hover:border-primary-500 hover:bg-primary-500",
    send:
      base +
      " w-full disabled:cursor-not-allowed dark:text-secondary-200 px-4 py-2 my-2 md:px-5 lg:px-6 md:py-5 lg:py-4 md:my-3 shadow-md shadow-primary-950 dark:shadow-primary-500 dark:shadow-md dark:border-secondary-200 border-2 dark:hover:text-primary-950 dark:hover:shadow-none dark:hover:border-primary-500 border-primary-950 hover:border-primary-500 hover:bg-primary-500",
    web:
      base +
      " dark:text-secondary-200 hover:translate-y-1 text-secondary-200 px-4 py-2 my-2 m-2 md:px-5 lg:px-6 md:py-5 lg:py-4 md:my-3 shadow-md shadow-primary-500 dark:shadow-primary-500 dark:shadow-md border-2 border-secondary-200",
    webSmall:
      base +
      " dark:text-secondary-200 hover:translate-y-px text-secondary-200 px-1 py-1 my-1 m-1 md:px-5 lg:px-6 md:py-5 lg:py-4 md:my-3 shadow-md shadow-primary-500 dark:shadow-primary-500 md:hover:translate-y-1 dark:shadow-md border-2 border-secondary-200",
  };
  const openNewWindow = (event) => {
    event.preventDefault();
    const newWindow = window.open(href, "_blank");
    newWindow.focus();
  };
  if (href)
    return (
      <a
        rel="noopener noreferrer"
        href={href}
        onClick={openNewWindow}
        className={styles[type]}
        download={download}
      >
        {children}
      </a>
    );
  if (to)
    return (
      <Link
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
        activeClass="active"
        className={styles[type]}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} type="submit" className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
