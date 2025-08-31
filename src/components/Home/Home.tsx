import Data from "./Data";
import Social from "./Social";

import "./Home.css";

export function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        {/* Partículas flutuantes */}
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>

        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>
      </div>
    </section>
  );
}
