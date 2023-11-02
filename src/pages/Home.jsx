import myImage from "../assets/image/profile.png";
import { TypeAnimation } from "react-type-animation";
import Button from "../components/Button";
function Home() {
  return (
    <div name="home" className="w-full h-screen bg-custom-background">
      <div className="max-w-[1080px] m-auto content-between h-full md:flex-row w-full flex flex-col justify-center md:justify-around">
        <div className="flex justify-center pt-20 md:pt-0">
          <img
            src={myImage}
            alt="my profile img"
            className="w-[160px] m-auto lg:w-[380px] md:w-[340px] shadow-lg dark:shadow-md rounded-full shadow-primary-950 dark:shadow-primary-400"
          />
        </div>
        <div className="flex flex-col justify-center mt-5 md:mt-0 md:w-[300px] lg:w-[400px] items-center md:items-start">
          <p className="dark:text-primary-500 text-primary-500 lg:font-bold md:font-semibold -mb-2 lg:text-xl mg:text-lg">
            Hi, my name is
          </p>
          <h1 className="sm:text-5xl text-4xl lg:text-6xl mb-1 font-bold text-primary-950 dark:text-secondary-300">
            Yaron Peres
          </h1>
          <h2 className="flex dark:text-secondary-500 text-secondary-600 sm:text-3xl lg:mb-2 text-2xl">
            <TypeAnimation
              sequence={[
                `I'm a Web Developer`,
                1500,
                `I'm a Tech Enthusiast`,
                1500,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </h2>
          <p className="dark:text-secondary-400 text-secondary-800 w-[250px] mb-2 lg:text-lg md:text-left lg:w-[350px] text-center">
            As a dedicated Full Stack Web Developer, my focus is on crafting
            responsive and user-friendly web applications. Committed to quality
            and continuous learning, I ensure that every project consistently
            meets high standards and delivers exceptional value.
          </p>
          <Button to="projects" type="normal">
            My projects
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
