import { ArrowRight, ArrowUpRight, Layers, Egg, Globe } from 'lucide-react';
import { Tag, Badge, IconBox, Card } from 'ds-lab';
import { GithubIcon } from './BrandIcons.jsx';

const icons = {
  layers: Layers,
  egg: Egg,
  globe: Globe,
};

export default function ProjectCard({ project }) {
  const { title, status, description, stack, demo, repo, icon } = project;
  const isLive = status === 'No ar';
  const Icon = icons[icon];

  return (
    <Card>
      <div className="project-card-head">
        <IconBox icon={<Icon aria-hidden="true" />} />
        <div className="project-card-body">
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
        <Badge label={status} variant={isLive ? 'success' : 'secondary'} />
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
