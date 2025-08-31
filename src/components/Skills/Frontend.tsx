import { BadgeCheck } from "lucide-react";

export default function Frontend() {
  return (
    <div className="skills__content skills__frontend">
      <div className="skills__header-content">
        <h3 className="skills__title">Frontend Developer</h3>
        <div className="skills__title-decoration"></div>
      </div>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data" data-skill="React">
            <div className="skills__icon-wrapper">
              <BadgeCheck className="badge-check-icon" />
            </div>
            <div className="skills__info">
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>

          <div className="skills__data" data-skill="Next">
            <div className="skills__icon-wrapper">
              <BadgeCheck className="badge-check-icon" />
            </div>
            <div className="skills__info">
              <h3 className="skills__name">Next</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>

          <div className="skills__data" data-skill="JavaScript">
            <div className="skills__icon-wrapper">
              <BadgeCheck className="badge-check-icon" />
            </div>
            <div className="skills__info">
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data" data-skill="Vue">
            <div className="skills__icon-wrapper">
              <BadgeCheck className="badge-check-icon" />
            </div>
            <div className="skills__info">
              <h3 className="skills__name">Vue</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>

          <div className="skills__data" data-skill="Redux">
            <div className="skills__icon-wrapper">
              <BadgeCheck className="badge-check-icon" />
            </div>
            <div className="skills__info">
              <h3 className="skills__name">Redux</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>

          <div className="skills__data" data-skill="TypeScript">
            <div className="skills__icon-wrapper">
              <BadgeCheck className="badge-check-icon" />
            </div>
            <div className="skills__info">
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
