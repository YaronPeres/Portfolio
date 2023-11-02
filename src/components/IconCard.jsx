function IconCard({ icon }) {
  const { image, name, website, alt } = icon;

  let additionalClass = "";

  if (name === "Github" || name === "Express.js") {
    additionalClass = "dark:bg-secondary-300 rounded-full";
  }
  return (
    <div
      className={`hover:scale-110 w-10 sm:w-12 md:w-14 lg:w-16 xl:w-20 mx-auto duration-500 ${additionalClass}`}
    >
      <a href={website} target="_blank" rel="noopener noreferrer">
        <img title={name} src={image} alt={alt} />
      </a>
    </div>
  );
}

export default IconCard;
