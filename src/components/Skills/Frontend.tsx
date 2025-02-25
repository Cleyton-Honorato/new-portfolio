import { BadgeCheck } from "lucide-react";

export default function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BadgeCheck className="badge-check-icon" />

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>

          <div className="skills__data">
            <BadgeCheck className="badge-check-icon" />

            <div>
              <h3 className="skills__name">Typescript</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>

          <div className="skills__data">
            <BadgeCheck className="badge-check-icon" />

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <BadgeCheck className="badge-check-icon" />

            <div>
              <h3 className="skills__name">Next</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>

          <div className="skills__data">
            <BadgeCheck className="badge-check-icon" />

            <div>
              <h3 className="skills__name">Vue</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>

          <div className="skills__data">
            <BadgeCheck className="badge-check-icon" />

            <div>
              <h3 className="skills__name">Tailwindcss</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
