import Header from "./Header";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import LinkButton from "./LinkButton";
function AppLayout() {
  return (
    <>
      <Header />
      <LinkButton />
      <Home />
      <Projects />
      <Experience />
      <Contact />
      {/* <main className="sm:p-8 px-4 py-8 w-full bg-custom-background overscroll-auto sm:min-h-[calc(100vh-85px)] min-h-[calc(100vh-69px)]">
        <Outlet />
      </main> */}
    </>
  );
}

export default AppLayout;
