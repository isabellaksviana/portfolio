import { Mail } from 'lucide-react'
import Section from './Section.jsx'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'
import { contact } from '../data/content.js'

// Traduz o nome escrito no content.js para o componente do ícone.
const icons = {
  mail: Mail,
  linkedin: LinkedinIcon,
  github: GithubIcon,
}

export default function Contact() {
  return (
    <Section id="contato" title="Contato">
      <p className="contact-text">
        {contact.text.map((line) => (
          <span key={line} className="line">{line} </span>
        ))}
      </p>
      <ul className="contact-links">
        {contact.links.map((link) => {
          const Icon = icons[link.icon]
          return (
            <li key={link.label}>
              <a className="button" href={link.href}>
                {Icon && <Icon size={18} aria-hidden="true" />}
                {link.label}
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
