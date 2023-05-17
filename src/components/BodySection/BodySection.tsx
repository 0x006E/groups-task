import { ReactComponent as Users } from "../../assets/icons/users.svg";
import Card from "../Card/Card";
import "./BodySection.scss";
function BodySection() {
  return (
    <main className="container-fluid h-100 col-md-10">
      <nav className="d-none d-md-flex mt-md-5 mb-md-2 justify-content-between border-bottom">
        <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
          <button
            className="nav-link border-bottom border-end-0 border-start-0 border-top-0 active position-relative text-black"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            All Posts(32)
            <span
              className="position-absolute bottom-0 start-0 ms-3  col-8 "
              style={{
                height: "2px",
                marginBottom: -2,
                backgroundColor: "black",
              }}
            ></span>
          </button>
          <button
            className="nav-link border-0"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
            disabled
          >
            Active
          </button>
          <button
            className="nav-link border-0"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
            disabled
          >
            Event
          </button>
          <button
            className="nav-link border-0"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
            disabled
          >
            Education
          </button>
          <button
            className="nav-link border-0"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
            disabled
          >
            Job
          </button>
        </div>

        <div className="d-flex gap-2">
          <div className="dropdown ">
            <button
              className="btn fs-15  btn-secondary text-dark dropdown-toggle fw-medium"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Write a Post &nbsp;
            </button>
            <ul className="dropdown-menu bg-gray-200 fs-15">
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
          <div>
            <button className="btn btn-primary fs-15 fw-semibold ">
              <Users />
              &nbsp;Join Group
            </button>
          </div>
        </div>
      </nav>

      <div className="col-md-6 mt-md-5">
        <div className="row px-2 py-3 justify-content-between  align-items-center bg-white d-md-none">
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

        <div className="row bg-gray-300 bg-md-white h-100 gap-2 gap-md-0 gy-md-4 pt-md-4 mt-md-n5">
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
      </div>
    </main>
  );
}

export default BodySection;
