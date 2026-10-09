import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
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
        {/* Faixa: Experiência e Como eu trabalho dividem o mesmo fundo */}
        <div className="band">
          <Experience />
          <Principles />
        </div>
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
