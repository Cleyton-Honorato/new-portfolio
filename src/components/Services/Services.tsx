import './Services.css';

export function Services() {
  return (
    <section className="services section" id="#services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services__button ">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                pariatur a eos, libero veniam quisquam dicta consectetur numquam
                asperiores porro vel laborum atque, neque possimus, aliquid
                labore. Dolorem, enim accusantium.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                pariatur a eos, libero veniam quisquam dicta consectetur numquam
                asperiores porro vel laborum atque, neque possimus, aliquid
                labore. Dolorem, enim accusantium.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Virtual <br /> Designer
            </h3>
          </div>

          <span className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                pariatur a eos, libero veniam quisquam dicta consectetur numquam
                asperiores porro vel laborum atque, neque possimus, aliquid
                labore. Dolorem, enim accusantium.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
