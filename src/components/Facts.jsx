import { Tag } from 'ds-lab';
import { about, skills } from '../data/content.js';

// Faixa no fundo normal, entre as duas faixas: formação e o que eu uso no dia a dia.
export default function Facts() {
  return (
    <section className="facts" aria-label="Formação e dia a dia">
      <div className="container">
        <ul className="facts-list">
          <li className="fact">
            <h3 className="label">
              <b>formação</b>
            </h3>
            <div>
              <p className="fact-value">{about.education}</p>
              <p className="fact-detail">{about.educationDetail}</p>
            </div>
          </li>
          <li className="fact">
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
          </li>
        </ul>
      </div>
    </section>
  );
}
