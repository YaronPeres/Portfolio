import { useEffect, useState } from "react";
import axios from "axios";
import IconCard from "./IconCard";

function IconList() {
  const [icon, setIcon] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/icons.json");

      if (response.data && response.data.icon) {
        // Data is available
        setIcon(response.data.icon);
      } else {
        // Data is empty or not in the expected format
        console.warn("Data received is empty or not in the expected format.");
      }
    } catch (error) {
      console.error("Error loading icon.json", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 text-center py-4 md:py-5 lg:py-6">
        {icon.map((icon) => (
          <IconCard key={icon.id} icon={icon} />
        ))}
      </div>
    </>
  );
}

export default IconList;
