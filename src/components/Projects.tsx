import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
