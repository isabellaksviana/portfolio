import { CodeXml } from 'lucide-react'
import { footer } from '../data/content.js'

// Traduz o nome escrito no content.js para o componente do ícone.
const icons = {
  code: CodeXml,
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {footer.map((line) => {
          const Icon = icons[line.icon]
          return (
            <p key={line.text} className="label">
              {Icon && <Icon size={16} aria-hidden="true" />}
              {line.highlight && <b>{line.highlight}</b>} {line.text}
            </p>
          )
        })}
      </div>
    </footer>
  )
}
