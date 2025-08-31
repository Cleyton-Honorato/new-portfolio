import { BadgeCheck } from "lucide-react";

export default function Backend() {
  return (
    <div className="skills__content skills__backend">
      <div className="skills__header-content">
        <h3 className="skills__title">Backend Developer</h3>
        <div className="skills__title-decoration"></div>
      </div>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data" data-skill="NodeJS">
            <div className="skills__icon-wrapper">
              <BadgeCheck className="badge-check-icon" />
            </div>
            <div className="skills__info">
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data" data-skill="Mongodb">
            <div className="skills__icon-wrapper">
              <BadgeCheck className="badge-check-icon" />
            </div>
            <div className="skills__info">
              <h3 className="skills__name">Mongodb</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data" data-skill="TypeORM">
            <div className="skills__icon-wrapper">
              <BadgeCheck className="badge-check-icon" />
            </div>
            <div className="skills__info">
              <h3 className="skills__name">TypeORM</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data" data-skill="MySQL">
            <div className="skills__icon-wrapper">
              <BadgeCheck className="badge-check-icon" />
            </div>
            <div className="skills__info">
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data" data-skill="GraphQL">
            <div className="skills__icon-wrapper">
              <BadgeCheck className="badge-check-icon" />
            </div>
            <div className="skills__info">
              <h3 className="skills__name">GraphQL</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data" data-skill="Firebase">
            <div className="skills__icon-wrapper">
              <BadgeCheck className="badge-check-icon" />
            </div>
            <div className="skills__info">
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
