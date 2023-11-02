import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";

function ResumeCre() {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    // Load data from experience.json
    axios
      .get("/experience.json") // Adjust the path to match the file location
      .then((response) => {
        if (response.data && response.data.experience) {
          // Data is available
          setExperience(response.data.experience);
          console.log(response.data.experience);
        } else {
          // Data is empty or not in the expected format
          console.warn("Data received is empty or not in the expected format.");
        }
      })
      .catch((error) => {
        console.error("Error loading experience.json:", error);
      });
  }, []);

  return (
    <>
      {experience.map((exp) => (
        <div
          className="shadow-lg group container border-2 dark:border-primary-500 border-primary-900 rounded-md flex justify-center text-center items-center content-div2 mx-auto lg:h-[190px] md:h-[170px] xl:h-[230px] h-[120px]"
          style={{ backgroundImage: `url(/${exp.image})` }}
          key={exp.id}
        >
          <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
            <span className="font-bold text-secondary-200 tracking-wider">
              {exp.name}
            </span>
            <div className="">
              <Button href={exp.href} type="webSmall">
                Open PDF
              </Button>
              <button>
                <a
                  className="dark:text-secondary-200 rounded-lg hover:translate-y-px md:hover:translate-y-1 text-secondary-200 px-1 py-1 my-1 m-1 md:px-5 lg:px-6 md:py-5 lg:py-4 md:my-3 shadow-md shadow-primary-500 dark:shadow-primary-500 dark:shadow-md border-2 border-secondary-200 transform hover:cursor-pointer transition-transform duration-100 ease-in-out active:translate-y-1 inline-block text-sm tracking-wide ring-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={exp.href}
                  download={exp.download}
                >
                  Download
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ResumeCre;
