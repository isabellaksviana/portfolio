import Header from './components/Header';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects';
import Facts from './components/Facts.jsx';
import Principles from './components/Principles.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Projects />
        {/* Fatos no fundo normal, separados dos projetos por uma linha; depois, a faixa no tom do cartão */}
        <Facts />
        <div className="band">
          <Principles />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
