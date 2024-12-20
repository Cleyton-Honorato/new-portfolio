import { Info, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <Info />

              <h3 className="contact__card-title">E-mail</h3>
              <span className="contact__card-data">
                limacleyton82@gmail.com
              </span>

              <a
                href="mailto:examplemail@gmail.com"
                className="contact__button"
              >
                Write me
                <ArrowRight />
              </a>
            </div>

            <div className="contact__card">
              <Info />

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">(85) 99451-2680</span>

              <a
                href="https://api.whatsapp.com/send?phone=558581843599&text=Hello,%20more%20information!"
                className="contact__button"
              >
                Write me
                <ArrowRight />
              </a>
            </div>

            <div className="contact__card">
              <Info />

              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">cleytin.1</span>

              <a href="https://www.instagram.com/cleytin.1/" className="contact__button">
                Write me
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
        </div>
      </div>
    </section>
  );
}
