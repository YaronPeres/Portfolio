import IconList from "../components/IconList";
import Button from "../components/Button";
import ResumeCre from "../components/ResumeCre";

function Experience() {
  return (
    <div name="experience" className="w-full pb-8 h-full bg-custom-background">
      <div className="max-w-[700px] sm:max-w-[580px] md:max-w-[680px] lg:max-w-[950px] xl:max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center xl:pb-4 md:text-start">
          <p className="inline border-b-4 sm:text-5xl text-4xl lg:text-6xl font-bold text-primary-950 border-primary-950 dark:text-secondary-300 dark:border-secondary-300">
            Skills
          </p>
        </div>
        <div className="text-center mt-2 md:text-start">
          <p className="inline dark:text-secondary-400 text-center md:text-start mt-4 text-secondary-800 w-[250px] mb-2 lg:text-lg xl:text-xl lg:w-[350px]">
            These are the techlogoies I&apos;ve worked with
          </p>
        </div>
        <IconList />
        <div className="text-center mb-2 md:text-start">
          <p className="inline text-center md:text-left dark:text-secondary-400 mt-4 text-secondary-800 w-[250px] mb-2 lg:text-lg xl:text-xl lg:w-[350px]">
            Resume and credentials
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResumeCre />
        </div>
        <div className="flex mt-2 sm:mt-[130px] md:mt-[20px] justify-center">
          <Button to="contact" type="normal">
            Contact me!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
