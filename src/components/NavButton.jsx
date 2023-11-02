import Button from "./Button";

function NavButton() {
  return (
    <div>
      <div className="flex">
        <Button to="home" type="nav">
          home
        </Button>
        <Button to="projects" type="nav">
          Projects
        </Button>
        <Button to="experience" type="nav">
          Experience
        </Button>
        <Button to="contact" type="nav">
          Contact
        </Button>
      </div>
    </div>
  );
}

export default NavButton;
