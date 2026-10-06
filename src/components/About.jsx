import Section from './Section.jsx';
import { about, skills } from '../data/content.js';
import { Tag } from 'ds-lab';

export default function About() {
  return (
    <Section id="sobre" title="Sobre">
      <div className="prose">
        {about.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>

      <div className="about-facts">
        <div className="about-fact">
          <h3 className="label">
            <b>formação</b>
          </h3>
          <p>{about.education}</p>
        </div>
        <div className="about-fact">
          <h3 className="label">
            <b>no dia a dia</b>
          </h3>
          <ul className="tags">
            {skills.daily.map((skill) => (
              <li key={skill}>
                <Tag label={skill} />
              </li>
            ))}
          </ul>
        </div>
        <div className="about-fact">
          <h3 className="label">
            <b>estudando</b>
          </h3>
          <ul className="tags">
            {skills.learning.map((skill) => (
              <li key={skill}>
                <Tag label={skill} variant="secondary" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
