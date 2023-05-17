import Card from "../Card/Card";
import "./BodySection.scss";
function BodySection() {
  return (
    <main className="container-fluid h-100">
      <div className="row justify-content-between px-2 py-3 align-items-center bg-white">
        <div className="col-6 fs-14 fw-bold">Posts(368)</div>
        <div className="col-6 d-flex justify-content-end">
          <div className="dropdown ">
            <button
              className="btn fs-13 btn-sm btn-secondary text-dark dropdown-toggle fw-semibold"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter:All &nbsp;
            </button>
            <ul className="dropdown-menu bg-gray-200 fs-13">
              <li>
                <a className="dropdown-item" href="#">
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Education
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Article
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row bg-gray-300 h-100 gap-2">
        <Card type="job" title="Software Developer - II" />
        <Card
          type="meetup"
          image="https://source.unsplash.com/random?cafe"
          title="Finance & Investment Elite Social Mixer @Lujiazui"
        />
        <Card
          type="article"
          image="https://source.unsplash.com/random?nature"
          title="What if famous brands had regular fonts? Meet RegulaBrands!"
        />
        <Card
          type="education"
          image="https://source.unsplash.com/random?education"
          title="Tax Benefits for Investment under National Pension Scheme launched by Government"
        />
      </div>
    </main>
  );
}

export default BodySection;
