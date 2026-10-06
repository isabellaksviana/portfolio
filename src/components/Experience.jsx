import Section from './Section.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiência">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="job">
            <p className="job-meta label label-stack">
              <b>{job.period}</b> {job.context}
            </p>
            <div>
              <h3 className="job-title">
                {job.role} <span className="job-company">· {job.company}</span>
              </h3>
              <ul className="job-items">
                {job.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
