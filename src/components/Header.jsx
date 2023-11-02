import DarkMode from "./DarkmodeToggle";
import NavButton from "./NavButton";
import PngLogo from "./PngLogo";
import SideBar from "./SideBar";
function header() {
  return (
    <header className="z-30 bg-custom-background fixed w-full h-[80px] flex justify-between items-center sm:px-8 py-5 px-4 border-b dark:border-primary-500 border-b-[#e6ebf4]">
      <div className="pl-1">
        <PngLogo />
      </div>
      <div>
        <NavButton />
      </div>
      <div className="hidden sm:block">
        <DarkMode />
      </div>
      <div className="sm:hidden">
        <SideBar />
      </div>
    </header>
  );
}

export default header;
