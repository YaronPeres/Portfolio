import Button from "../components/Button";
import ProjectCardList from "../components/ProjectCardList";
function Projects() {
  return (
    <div name="projects" className="w-full h-full bg-custom-background">
      <div className="max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center md:text-start">
          <p className="inline md:text-middle border-b-4 sm:text-5xl text-4xl lg:text-6xl mb-1 font-bold text-primary-950 border-primary-950 dark:text-secondary-300 dark:border-secondary-300">
            Projects
          </p>
        </div>
        {/*project*/}
        <ProjectCardList />
        <div className="mt-2 pb-10 md:pt-[150px] lg:pt-[80px] xl:pt-[120px] xl:pb-[90px] text-center">
          <div className="inline-block md:mt-10 lg:mt-24">
            <Button to="experience" type="normal">
              My experience
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
