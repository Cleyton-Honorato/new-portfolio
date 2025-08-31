import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
// import Services from "./components/Services";
import Qualifications from "./components/Qualifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Componente de separação entre seções
const SectionDivider = () => (
  <div className="section-divider">
    <div className="section-divider__line"></div>
    <div className="section-divider__dot"></div>
    <div className="section-divider__line"></div>
  </div>
);

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        {/* <Services /> */}
        <Qualifications />
        <SectionDivider />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
