import { useEffect, useState } from "react";
import axios from "axios";
import ProjectItem from "./ProjectItem";

//ProjectCardList is responsible for fetching data and rendering a list of project cards

function ProjectCardList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Load data from projects.json
    axios
      .get("/projects.json") // Adjust the path to match the file location
      .then((response) => {
        if (response.data && response.data.projects) {
          // Data is available
          setProjects(response.data.projects);
        } else {
          // Data is empty or not in the expected format
          console.warn("Data received is empty or not in the expected format.");
        }
      })
      .catch((error) => {
        console.error("Error loading projects.json:", error);
      });
  }, []);

  return (
    <>
      {/*Container*/}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectItem key={project.id} projectData={project} />
        ))}
      </div>
    </>
  );
}

export default ProjectCardList;
