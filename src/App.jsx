import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Facts from './components/Facts.jsx'
import Principles from './components/Principles.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Projects />
        {/* Duas faixas no tom do cartão, com a faixa de fatos no fundo normal entre elas */}
        <div className="band">
          <Experience />
        </div>
        <Facts />
        <div className="band">
          <Principles />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
