import{ useState, useEffect } from "react";
import { projectsData, projectsNav } from "../../../data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    //get projects based on the selected category
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.category === item.name
      );
      setProjects(filteredProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((navItem, index) => (
            <li
              key={index}
              onClick={(e) => handleClick(e, index)}
              className={`${active === index ? "active" : ""} cursor-pointer`}
            >
              {navItem.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* projects grids */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </>
  );
};

export default Projects;
