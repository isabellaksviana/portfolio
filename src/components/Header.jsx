import ThemeToggle from './ThemeToggle.jsx'
import { profile } from '../data/content.js'

const nav = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo">{profile.name}</a>
        <nav aria-label="Principal">
          <ul className="nav-list">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
