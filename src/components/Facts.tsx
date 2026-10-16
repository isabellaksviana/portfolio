import { Tag } from 'ds-lab';
import { now, about, skills } from '../data/content';

// Faixa logo depois dos projetos: o que eu faço agora (linha própria, em cima),
// e embaixo a formação e o que eu uso no dia a dia.
export default function Facts() {
  return (
    <section className="facts" aria-label="Agora, formação e dia a dia">
      <div className="container">
        <div className="fact fact-now">
          <h3 className="label">
            <b>agora</b>
          </h3>
          <div>
            <p className="fact-value">{now.title}</p>
            <p className="fact-detail">{now.detail}</p>
          </div>
          <p className="fact-text">
            {/* texto solto sai normal; { bold } sai em negrito */}
            {now.text.map((part, index) =>
              typeof part === 'string' ? part : <b key={index}>{part.bold}</b>,
            )}
          </p>
        </div>

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
