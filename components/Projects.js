import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="mt-6 py-10 bg-blue-100/90 px-4 rounded-md">
      <h2
        id="about"
        className="text-4xl md:text-5xl font-bold text-blue-800 w-fit scroll-smooth relative"
      >
        Projects
        <span className="absolute w-3/4 h-1 bg-blue-800 left-0 -bottom-2"></span>
      </h2>
      <div className="md:grid grid-cols-3 gap-10 mt-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            img={project.img}
            stack={project.stack}
            demoLink={project.demoLink}
            sourceCodeLink={project.sourceCodeLink}
            inProgress={project.inProgress}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
