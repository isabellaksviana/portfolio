import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Tag, Badge, Card } from 'ds-lab';
import { GithubIcon } from './BrandIcons';
import type { Project } from '../data/content';

export default function ProjectCard({ project }: { project: Project }) {
  const { title, status, description, stack, demo, repo, cover } = project;
  const isLive = status === 'No ar';
  // a palavra se repete na linha pra nunca aparecer um buraco quando ela desliza
  const coverLine = `${cover} ${cover} ${cover}`;

  return (
    <Card>
      {/* Capa: só decoração, o título de verdade vem logo abaixo */}
      <div className="project-cover" aria-hidden="true">
        <span>{coverLine}</span>
        <span>{coverLine}</span>
      </div>

      <div className="project-card-body">
        <Badge label={status} variant={isLive ? 'success' : 'warning'} />
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-text">{description}</p>
        <ul className="tags" aria-label="Tecnologias">
          {stack.map((tech) => (
            <li key={tech}>
              <Tag label={tech} />
            </li>
          ))}
        </ul>
      </div>

      {(demo || repo) && (
        <ul className="project-card-actions">
          {demo && (
            <li>
              <a
                href={demo}
                className="project-card-link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver projeto
                <ArrowRight aria-hidden="true" />
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          )}
          {repo && (
            <li>
              <a href={repo} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
                GitHub
                <ArrowUpRight aria-hidden="true" />
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          )}
        </ul>
      )}
    </Card>
  );
}
