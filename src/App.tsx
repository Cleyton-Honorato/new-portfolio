import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Journey } from "./components/Journey";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <div className="orbs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
