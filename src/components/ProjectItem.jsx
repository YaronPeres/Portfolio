import Button from "./Button";
// ProjectItem is responsible for rendering the structure of a single project card

function ProjectItem({ projectData }) {
  const { name, github, demo, image } = projectData;
  return (
    <>
      {/*Grid Items*/}
      <div
        style={{ backgroundImage: `url(/${image})` }}
        className="shadow-lg group container border-2 dark:border-primary-500 border-primary-900 rounded-md flex justify-center text-center items-center content-div mx-auto"
      >
        {/* Hover Effect*/}
        <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
          <span className="text-2xl font-bold text-secondary-200 tracking-wider">
            {name}
          </span>
          <div className="pt-6 flex text-center">
            <Button href={demo} type="web">
              Demo
            </Button>
            <Button href={github} type="web">
              Code
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
