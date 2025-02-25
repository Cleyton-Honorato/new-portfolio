import { BadgeCheck } from "lucide-react";

export default function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BadgeCheck className="badge-check-icon" />

            <div>
              <h3 className="skills__name">Node</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data">
            <BadgeCheck className="badge-check-icon" />

            <div>
              <h3 className="skills__name">Mongodb</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data">
            <BadgeCheck className="badge-check-icon" />

            <div>
              <h3 className="skills__name">TypeORM</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <BadgeCheck className="badge-check-icon" />

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data">
            <BadgeCheck className="badge-check-icon" />

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
