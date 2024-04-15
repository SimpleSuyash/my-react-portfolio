import GithubIcon from "../assets/images/github.png";
import AppStoreIcon from "../assets/images/app-store.png";

const ProjectCard = ({ project }) => {
  const appClickHandler = () => {
    window.open(project.live, "_blank");
  }
  const githubClickHandler = () => {
    window.open(project.repo, "_blank");
  }

  return (
    <div className="relative group">
      <div
        key={project.id}
        className="flex flex-col-reverse items-center text-center peer"
      >
        <div className="mb-2">
          <img src={project.image} alt={project.name} className="rounded-2xl" />
        </div>
        <p className="pb-3">{project.description}</p>
        <p className="text-accent text-sm mb-3">{project.category}</p>
        <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
      </div>
      <div className="absolute bottom-20 right-0 space-x-2 cursor-pointer hidden group-hover:flex">
        <img src={GithubIcon} alt={project.name} className="size-12 bg-blue-500 rounded-lg hover:opacity-75" onClick={githubClickHandler} />
        {project.live && <img src={AppStoreIcon} alt={project.name} className="size-12 hover:opacity-75" onClick={appClickHandler} />}
      </div>
    </div>
  );
};

export default ProjectCard;
